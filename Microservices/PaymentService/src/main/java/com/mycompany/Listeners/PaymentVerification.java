/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.Listeners;

import com.mycompany.Beans.PaymentBeanLocal;
import com.mycompany.Modules.OrderStatus;
import com.mycompany.entities.OrderMaster;
import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnection;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import fish.payara.cloud.connectors.kafka.api.OnRecord;
import javax.annotation.Resource;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.producer.ProducerRecord;

/**
 *
 * @author krdmo
 */
@MessageDriven(activationConfig = {
    @ActivationConfigProperty(propertyName = "clientId", propertyValue = "Listener3"),
    //@ActivationConfigProperty(propertyName = "groupIdConfig", propertyValue = "food_delivery"),
    @ActivationConfigProperty(propertyName = "topics", propertyValue = "payment-verification-listener"),
    @ActivationConfigProperty(propertyName = "bootstrapServersConfig", propertyValue = "localhost:9092"),
    @ActivationConfigProperty(propertyName = "autoCommitInterval", propertyValue = "100"),
    @ActivationConfigProperty(propertyName = "retryBackoff", propertyValue = "1000"),
    @ActivationConfigProperty(propertyName = "keyDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "valueDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "pollInterval", propertyValue = "1000")})
public class PaymentVerification {
    
    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    @EJB
    PaymentBeanLocal pbl;

    public PaymentVerification() {
    }
    
    @OnRecord(topics = "payment-verification-listener")
    public void verifyPayment(ConsumerRecord consumerRecord)
    {
        String jsonPs = consumerRecord.value().toString();
        PaymentStatus ps = PaymentStatusUtil.jsonToPaymentStatus(jsonPs);
        
        OrderMaster order = pbl.getOrderById(ps.getOrderid());
        
        if(ps.getBillAmount() <= ps.getCredits())
        {
            pbl.updateOrderStatus(order, OrderStatus.PREPARING.toString());
            sendVerifiedPayment(ps);
        }
        else
        {
            pbl.updateOrderStatus(order, OrderStatus.CANCELLED.toString());
            sendVerifiedPayment(ps);
        }
    }
    
    void sendVerifiedPayment(PaymentStatus ps)
    {
        String psJson = PaymentStatusUtil.paymentStatusToJson(ps);
        System.out.println("in send status");
        try(KafkaConnection connection = factory.createConnection())
        {
            connection.send(new ProducerRecord("order-listener", psJson));
        }
        catch(Exception e)
        {
            System.out.println("in sendOrderToOrdering "+e);
        }
    }
    
    
}
