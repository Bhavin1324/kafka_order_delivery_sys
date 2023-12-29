/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB31/SingletonEjbClass.java to edit this template
 */
package Listeners;

import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnection;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import javax.annotation.Resource;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.resource.ResourceException;
import org.apache.kafka.clients.producer.ProducerRecord;

/**
 *
 * @author krdmo
 */
@Singleton
@Startup
public class MessageSender {

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    public void SendPaymentInquiry(String orderid, String userid, String paymentType, Double billAmount)
    {
        PaymentStatus pm = new PaymentStatus();
        pm.setOrderid(orderid);
        pm.setBillAmount(billAmount);
        pm.setPaymentType(paymentType);
        pm.setUserid(userid);
        String jsonPm = PaymentStatusUtil.paymentStatusToJson(pm);
        System.out.println("in message sender");
        try(KafkaConnection connection = factory.createConnection())
        {
            connection.send(new ProducerRecord("payment-listener", jsonPm));
        }
        catch(Exception e)
        {
            
        }
    }
}
