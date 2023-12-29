/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.Listeners;

import EJBs.Customer_EJBLocal;
import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnection;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import fish.payara.cloud.connectors.kafka.api.KafkaListener;
import fish.payara.cloud.connectors.kafka.api.OnRecord;
import javax.annotation.PreDestroy;
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
    @ActivationConfigProperty(propertyName = "clientId", propertyValue = "Listener2"),
    @ActivationConfigProperty(propertyName = "groupIdConfig", propertyValue = "food_delivery2"),
    @ActivationConfigProperty(propertyName = "topics", propertyValue = "customer-listener"),
    @ActivationConfigProperty(propertyName = "bootstrapServersConfig", propertyValue = "localhost:9092"),
    @ActivationConfigProperty(propertyName = "autoCommitInterval", propertyValue = "100"),
    @ActivationConfigProperty(propertyName = "retryBackoff", propertyValue = "1000"),
    @ActivationConfigProperty(propertyName = "keyDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "valueDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "pollInterval", propertyValue = "3000"),
    @ActivationConfigProperty(propertyName = "commitEachPoll", propertyValue = "true")})
public class CreditListener implements KafkaListener{
    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    @EJB
    Customer_EJBLocal cel;

    public CreditListener() {
    }
    
    
    
    @OnRecord(topics="customer-listener")
    public void creditListener(ConsumerRecord consumerRecord)
    {
        String jsonPs = consumerRecord.value().toString();
        PaymentStatus ps = PaymentStatusUtil.jsonToPaymentStatus(jsonPs);
        double credits = cel.getUserCredits(ps.getUserid());
        ps.setCredits(credits);
        if(credits>=ps.getBillAmount())
            cel.updateUserCredits(ps.getUserid(), credits-ps.getBillAmount());
        sendPaymentInquiry(ps);
    }
    
    void sendPaymentInquiry(PaymentStatus ps)
    {
        String jsonPs = PaymentStatusUtil.paymentStatusToJson(ps);
        System.out.println("in sendPaymentInquiry");
        try(KafkaConnection connection = factory.createConnection())
        {
            connection.send(new ProducerRecord("payment-verification-listener", jsonPs));
        }
        catch(Exception e)
        {
            System.out.println("in sendPaymentInquiry catch "+e);
        }
    }
    
    @PreDestroy
    public void clearKafkaTopic()
    {
        try(KafkaConnection connection = factory.createConnection())
        {
            connection.flush();
        }
        catch(Exception e)
        {
            
        }
    }
}
