/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Listeners;

import Beans.OrderBeanLocal;
import Entities.OrderMaster;
import com.mycompany.Modules.OrderStatus;
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

/**
 *
 * @author krdmo
 */
//@Startup
@MessageDriven(activationConfig = {
    @ActivationConfigProperty(propertyName = "clientId", propertyValue = "OrderListener4"),
    @ActivationConfigProperty(propertyName = "groupIdConfig", propertyValue = "food_delivery4"),
    @ActivationConfigProperty(propertyName = "topics", propertyValue = "order-listener"),
    @ActivationConfigProperty(propertyName = "bootstrapServersConfig", propertyValue = "localhost:9092"),
    @ActivationConfigProperty(propertyName = "autoCommitInterval", propertyValue = "100"),
    @ActivationConfigProperty(propertyName = "retryBackoff", propertyValue = "1000"),
    @ActivationConfigProperty(propertyName = "keyDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "valueDeserializer", propertyValue = "org.apache.kafka.common.serialization.StringDeserializer"),
    @ActivationConfigProperty(propertyName = "pollInterval", propertyValue = "3000"),
    @ActivationConfigProperty(propertyName = "commitEachPoll", propertyValue = "true")})
public class OrderListener implements KafkaListener{
    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    @EJB
    OrderBeanLocal obl;

    public OrderListener() {
    }
    
    @OnRecord(topics="order-listener")
    public void PaymentStatusListener(ConsumerRecord consumerRecord)
    {
        String jsonPs = consumerRecord.value().toString();
        PaymentStatus ps = PaymentStatusUtil.jsonToPaymentStatus(jsonPs);
        System.out.println(ps);
        String orderid = ps.getOrderid();
        OrderMaster order = obl.getOrderById(orderid);
        System.out.println("in order listener");
        if(ps.getCredits()>=ps.getBillAmount())
        {
            obl.updateOrderStatus(order, OrderStatus.PREPARING.toString());
        }
        else
        {
            obl.updateOrderStatus(order, OrderStatus.CANCELLED.toString());
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
