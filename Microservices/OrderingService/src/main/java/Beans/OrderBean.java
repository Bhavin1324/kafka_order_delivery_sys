/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package Beans;

import Entities.Items;
import Entities.OrderMaster;
import Entities.Pincodes;
import Entities.Users;
import java.util.Collection;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author krdmo
 */
@Stateless
public class OrderBean implements OrderBeanLocal {
    
    
    @PersistenceContext(unitName="orderpu")
    EntityManager em;
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public Collection<Items> getAllItems()
    {
        Collection<Items> items = em.createNamedQuery("Items.findAll").getResultList();
        return items;
    }

    @Override
    public Collection<OrderMaster> getOrderHistory(String username, String status) {
        Users user = (Users)em.createNamedQuery("Users.findByUsername").setParameter("username", username).getSingleResult();
        Collection<OrderMaster> orders = em.createNamedQuery("OrderMaster.findByCustomerId").setParameter("userid", user.getId()).setParameter("status", status).getResultList();
        return orders;
    }

    @Override
    public OrderMaster getOrderById(String id) {
        OrderMaster order = (OrderMaster)em.createNamedQuery("OrderMaster.findById").setParameter("id", id).getSingleResult();
        return order;
    }

    @Override
    public Pincodes getDistrictNameByPincode(int pincode) {
        Pincodes pin = (Pincodes)em.createNamedQuery("Pincodes.findByPincode").setParameter("pincode", pincode).getSingleResult();
        return pin;
    }

    @Override
    public Collection<Pincodes> getDistrictByName(String name) {
        Collection<Pincodes> pins = em.createNamedQuery("Pincodes.findByDistrict").setParameter("district", name+"%").getResultList();
        return pins;
    }
    
    
}
