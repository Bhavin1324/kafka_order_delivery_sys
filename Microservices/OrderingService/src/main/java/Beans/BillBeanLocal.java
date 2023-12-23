/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/SessionLocal.java to edit this template
 */
package Beans;

import Entities.OrderLine;
import java.util.Collection;
import java.util.concurrent.Future;
import javax.ejb.Local;
import javax.json.JsonObject;

/**
 *
 * @author krdmo
 */
@Local
public interface BillBeanLocal {
    Boolean addOrder(JsonObject data);
}
