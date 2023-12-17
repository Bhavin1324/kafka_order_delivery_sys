/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.Listeners;

import com.mycompany.Beans.PaymentBeanLocal;
import com.mycompany.Modules.OrderStatus;
import com.mycompany.Modules.PaymentType;
import com.mycompany.entities.OrderMaster;
import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnection;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import fish.payara.cloud.connectors.kafka.api.KafkaListener;
import fish.payara.cloud.connectors.kafka.api.OnRecord;
import javax.annotation.Resource;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import javax.ejb.Startup;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.producer.ProducerRecord;

/**
 *
 * @author krdmo
 */
//@Startup
@MessageDriven(activationConfig = {
    @ActivationConfigProperty(propertyName = "clientId", propertyValue = "Listener1"),
    @ActivationConfigProperty(propertyName = "groupIdConfig", propertyValue = "food_delivery1"),
    @ActivationConfigProperty(propertyName = "topics", propertyValue = "payment-listener"),
    @ActivationConfigProperty(propertyName = "bootstrapServersConfig", propertyValue = "localhost:9092"),
    @ActivationConfigProperty(propertyName = "autoCommitInterval", propertyValue = "100"),
    @ActivationConfigProperty(propertyName = "retryBackoff", propertyValue = "1000"),
    @ActivationConfigProperty(propertyName = "keyDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "valueDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "pollInterval", propertyValue = "3000"),
    @ActivationConfigProperty(propertyName = "commitEachPoll", propertyValue = "true")})
public class PaymentListener implements KafkaListener {

    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;

    @EJB
    PaymentBeanLocal pbl;

    public PaymentListener() {
    }
    
    

    @OnRecord(topics = "payment-listener")
    public void paymentListener(ConsumerRecord consumerRecord) {
        String psJson = consumerRecord.value().toString();
        PaymentStatus ps = PaymentStatusUtil.jsonToPaymentStatus(psJson);
        System.out.println("in payment listener");
        if (ps.getPaymentType().equals(PaymentType.CREDIT.toString())) {
            sendCreditInquiry(ps);
        } else {
            OrderMaster order = pbl.getOrderById(ps.getOrderid());
            pbl.updateOrderStatus(order, OrderStatus.PREPARING.toString());
            sendToOrder(ps);
        }

    }

    void sendCreditInquiry(PaymentStatus ps) {
        String jsonPs = PaymentStatusUtil.paymentStatusToJson(ps);
        System.out.println("in send credit inquiry");
        try ( KafkaConnection connection = factory.createConnection()) {
            connection.send(new ProducerRecord("customer-listener", jsonPs));
        } catch (Exception e) {

        }
    }

    void sendToOrder(PaymentStatus ps) {
        String jsonPs = PaymentStatusUtil.paymentStatusToJson(ps);
        System.out.println("in send to order");
        try ( KafkaConnection connection = factory.createConnection()) {
            connection.send(new ProducerRecord("order-listener", jsonPs));
        } catch (Exception e) {

        }
    }
}
