/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/SessionLocal.java to edit this template
 */
package Beans;

import Entities.Items;
import Entities.OrderMaster;
import Entities.Outlets;
import Entities.Pincodes;
import Entities.Users;
import java.util.Collection;
import javax.ejb.Local;

/**
 *
 * @author krdmo
 */
@Local
public interface OrderBeanLocal {
    public Collection<Items> getAllItems();
    public Collection<OrderMaster> getOrderHistory(String username, String status); 
    public OrderMaster getOrderById(String id);
    //public Collection<Outlets> getOutlets();
    public Pincodes getDistrictNameByPincode(int pincode);
    public Collection<Pincodes> getDistrictByName(String name);
    Boolean updateOrderStatus(OrderMaster order, String status);
}
