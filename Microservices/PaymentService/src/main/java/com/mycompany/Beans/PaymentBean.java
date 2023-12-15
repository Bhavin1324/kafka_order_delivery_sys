/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package com.mycompany.Beans;

import com.mycompany.entities.OrderMaster;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author krdmo
 */
@Stateless
public class PaymentBean implements PaymentBeanLocal {

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @PersistenceContext(unitName="orderpu")
    EntityManager em;

    @Override
    public OrderMaster getOrderById(String id) {
        OrderMaster order = (OrderMaster)em.createNamedQuery("OrderMaster.findById").setParameter("id", id).getSingleResult();
        return order;
        
    }
    
    @Override
    public Boolean updateOrderStatus(OrderMaster order, String status) {
        if(em.contains(order))
        {
            order.setOrderStatus(status);
            em.merge(order);
            return true;
        }
        return false;
    }
}
