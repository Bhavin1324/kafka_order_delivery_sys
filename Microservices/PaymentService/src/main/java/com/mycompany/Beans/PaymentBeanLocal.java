/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/SessionLocal.java to edit this template
 */
package com.mycompany.Beans;

import com.mycompany.entities.OrderMaster;
import com.mycompany.models.PHResponseType;
import javax.ejb.Local;

/**
 *
 * @author krdmo
 */
@Local
public interface PaymentBeanLocal {
    OrderMaster getOrderById(String id);
    public Boolean updateOrderStatus(OrderMaster order, String status);
}
