package com.mycompany.entities;

import com.mycompany.entities.DeliveryPerson;
import com.mycompany.entities.OrderLine;
import com.mycompany.entities.Outlets;
import com.mycompany.entities.Users;
import java.util.Date;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(OrderMaster.class)
public class OrderMaster_ { 

    public static volatile CollectionAttribute<OrderMaster, OrderLine> orderLineCollection;
    public static volatile SingularAttribute<OrderMaster, Double> amount;
    public static volatile SingularAttribute<OrderMaster, Outlets> outletId;
    public static volatile SingularAttribute<OrderMaster, String> orderStatus;
    public static volatile SingularAttribute<OrderMaster, String> paymentMethod;
    public static volatile SingularAttribute<OrderMaster, Double> deliveryCharge;
    public static volatile SingularAttribute<OrderMaster, String> id;
    public static volatile SingularAttribute<OrderMaster, DeliveryPerson> deliveryPersonId;
    public static volatile SingularAttribute<OrderMaster, Date> orderDate;
    public static volatile SingularAttribute<OrderMaster, Users> userId;
    public static volatile SingularAttribute<OrderMaster, Double> payableAmount;

}