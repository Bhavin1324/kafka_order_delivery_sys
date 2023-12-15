/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package Beans;

import Entities.DeliveryPerson;
import Entities.Items;
import Entities.OrderLine;
import Entities.OrderMaster;
import Entities.Outlets;
import Entities.Users;
import Listeners.MessageSender;
import com.mycompany.Modules.OrderStatus;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mycompany.Modules.ID;
import java.util.Collection;
import java.util.Date;
import javax.ejb.Stateless;
import com.mycompany.Modules.OrderStatus;
import java.lang.reflect.Type;
import javax.ejb.EJB;
import javax.json.JsonObject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author krdmo
 * 
 * JSON object Structure
 * {
 *  
 * }
 */
@Stateless
public class BillBean implements BillBeanLocal {
    
    @PersistenceContext(unitName="orderpu")
    EntityManager em;
    
    @EJB
    MessageSender ms;

    @Override
    public Boolean addOrder(JsonObject data) {
        String jsonItems = data.getJsonArray("items").toString();
        Gson gson = new Gson();
        Type listType = new TypeToken<Collection<OrderLine>>() {
        }.getType();
        Collection<OrderLine> items = gson.fromJson(jsonItems, listType);

        Double itemTotal = 0d;
        OrderMaster order = new OrderMaster();
        
        String uuid = ID.getUUID();
        
        order.setId(uuid);

        order.setOrderStatus(OrderStatus.PLACED.toString());

        for (OrderLine i : items) {
            i.setId(ID.getUUID());
            Double tax = i.getItemId().getPrice() * i.getQuantity() * (i.getItemId().getTaxSlabId().getPercentage() / 100);
            itemTotal += i.getItemId().getPrice() * i.getQuantity();
            itemTotal += tax;
            i.setOrderId(order);
            //em.persist(i);
        }
        order.setAmount(itemTotal);

        order.setPaymentMethod(data.getString("paymentMethod"));
        order.setDeliveryCharge(25d);
        order.setPayableAmount(itemTotal + 25);
        order.setOrderDate(new Date());
        Users user = (Users)em.createNamedQuery("Users.findById").setParameter("id", data.getString("userId")).getSingleResult();
        order.setUserId(user);
        
//        DeliveryPerson dp = (DeliveryPerson) em.createNamedQuery("DeliveryPerson.findById").setParameter("Id", data.getString("deliveryPersonId")).getSingleResult();
//        order.setDeliveryPersonId(dp);
        
        Outlets outlet = (Outlets) em.createNamedQuery("Outlets.findById").setParameter("id", data.getString("outletId")).getSingleResult();
        order.setOutletId(outlet);
        
        order.setOrderLineCollection(items);
        em.persist(order);
        
        ms.SendPaymentInquiry(order.getId(), order.getUserId().getId(), order.getPaymentMethod(),order.getPayableAmount());
        
        return em.contains(order);               
    }


}
