/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Listeners;

import com.mycompany.models.PHResponseType;
import com.mycompany.models.PaymentStatus;
import com.mycompany.models.PaymentStatusUtil;
import fish.payara.cloud.connectors.kafka.api.KafkaConnection;
import fish.payara.cloud.connectors.kafka.api.KafkaConnectionFactory;
import javax.annotation.Resource;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import org.apache.kafka.clients.producer.ProducerRecord;

/**
 *
 * @author krdmo
 */
@Singleton
@Startup
public class MessageSender {

    @Resource(lookup = "java:app/kafka/factory")
    private KafkaConnectionFactory factory;
    
    public MessageSender() {
    }
    
    public PHResponseType sendAllocationMessage(String orderid, String userid)
    {
        PaymentStatus ps = new PaymentStatus();
        ps.setOrderid(orderid);
        ps.setUserid(userid);
        PHResponseType ph = new PHResponseType();
        
        String jsonPm = PaymentStatusUtil.paymentStatusToJson(ps);
        
        try(KafkaConnection connection = factory.createConnection())
        {
            connection.send(new ProducerRecord("delivery-listener", jsonPm));
            ph.setMessage("Success");
            ph.setStatus(1);
            return ph;
            
        }
        catch(Exception e)
        {
            ph.setMessage("Failure");
            ph.setStatus(0);
            return ph;
            
        }
    }
}
