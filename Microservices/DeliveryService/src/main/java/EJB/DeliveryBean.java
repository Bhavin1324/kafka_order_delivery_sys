/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package EJB;

import com.mycompany.Modules.OrderStatus;
import com.mycompany.utils.OTPUtils;
import entities.DeliveryPerson;
import entities.OrderMaster;
import entities.Outlets;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.json.JSONObject;

/**
 *
 * @author HP Laptop
 */
@Stateless
public class DeliveryBean implements DeliveryBeanLocal {

    @PersistenceContext(unitName = "orderpu")
    private EntityManager em;

    //This method is called by Preparation Service  
    @Override
    public String deliveryPersonAllocation(String orderId, String outletid) {
        try {
            Outlets outlet = em.find(Outlets.class, outletid);
            OrderMaster order = em.find(OrderMaster.class, orderId);

            List<DeliveryPerson> persons = new ArrayList<>();
            persons.addAll(outlet.getDeliveryPersonCollection());
            DeliveryPerson randomPerson = persons.get((int) (Math.random() * persons.size()));
            order.setDeliveryPersonId(randomPerson);
            order.setOrderStatus(OrderStatus.IN_TRANSIT.toString());
            em.merge(order);

            JSONObject json = new JSONObject();
            String OTP = OTPUtils.generateOTP();
            json.put("OTP", OTP);
            return json.toString();
        } catch (Exception ex) {
            System.out.println("Exception occurred in Delivery Person Allocation");
            ex.printStackTrace();
            return null;
        }
    }

    //This method is called by Preparation Service
    @Override
    public boolean updateDeliveryStatusToDelivered(String orderId) {
        try {
            OrderMaster order = em.find(OrderMaster.class, orderId);
            order.setOrderStatus(OrderStatus.DELIVERED.toString());
        } catch (Exception ex) {
            System.out.println("Exceptuon occured in Updating delivery status to Delivered");
            ex.printStackTrace();
            return false;
        }
        return true;
    }

    //To update any status via path parameter
    public boolean updateDeliveryStatus(String orderId, String status) {
        try {
            OrderMaster order = em.find(OrderMaster.class, orderId);
            for (OrderStatus o : OrderStatus.values()) {
                if (o.toString().equals(status)) {
                    order.setOrderStatus(o.toString());
                }
            }
        } catch (Exception ex) {
            System.out.println("Exceptuon occured in Updating delivery status to Delivered");
            ex.printStackTrace();
            return false;
        }
        return true;
    }
}
