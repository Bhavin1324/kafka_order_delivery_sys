/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Listeners;

import EJB.DeliveryBeanLocal;
import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import fish.payara.cloud.connectors.kafka.api.KafkaListener;
import fish.payara.cloud.connectors.kafka.api.OnRecord;
import javax.annotation.Resource;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import org.apache.kafka.clients.consumer.ConsumerRecord;

/**
 *
 * @author krdmo
 */
@MessageDriven(activationConfig = {
    @ActivationConfigProperty(propertyName = "clientId", propertyValue = "Listener5"),
    @ActivationConfigProperty(propertyName = "groupIdConfig", propertyValue = "food_delivery5"),
    @ActivationConfigProperty(propertyName = "topics", propertyValue = "delivery-listener"),
    @ActivationConfigProperty(propertyName = "bootstrapServersConfig", propertyValue = "localhost:9092"),
    @ActivationConfigProperty(propertyName = "autoCommitInterval", propertyValue = "100"),
    @ActivationConfigProperty(propertyName = "retryBackoff", propertyValue = "1000"),
    @ActivationConfigProperty(propertyName = "keyDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "valueDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "pollInterval", propertyValue = "3000"),
    @ActivationConfigProperty(propertyName = "commitEachPoll", propertyValue = "true")})
public class DeliveryListener implements KafkaListener{

    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    @EJB
    DeliveryBeanLocal dbl;
   
        
    @OnRecord(topics="delivery-listener")
    public void allocateDeliveryPerson(ConsumerRecord consumerRecord)
    {
        String jsonPs = consumerRecord.value().toString();
        PaymentStatus ps = PaymentStatusUtil.jsonToPaymentStatus(jsonPs);
        dbl.deliveryPersonAllocation(ps.getOrderid(), ps.getUserid());
        
    }
    
}
