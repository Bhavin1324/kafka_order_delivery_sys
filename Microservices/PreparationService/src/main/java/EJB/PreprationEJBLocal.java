/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/SessionLocal.java to edit this template
 */
package EJB;

import javax.ejb.Local;
import javax.json.JsonObject;

/**
 *
 * @author Bhatt Jaimin
 */
@Local
public interface PreprationEJBLocal {
    JsonObject getOrdersByOutletandStatus(String outlet_id,String status);
    public JsonObject  getOrderStatusByCustomer(String customerid);
    
}
