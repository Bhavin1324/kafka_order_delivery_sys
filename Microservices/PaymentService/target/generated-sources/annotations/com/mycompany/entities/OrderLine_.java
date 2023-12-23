package com.mycompany.entities;

import com.mycompany.entities.Items;
import com.mycompany.entities.OrderMaster;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(OrderLine.class)
public class OrderLine_ { 

    public static volatile SingularAttribute<OrderLine, Items> itemId;
    public static volatile SingularAttribute<OrderLine, Integer> quantity;
    public static volatile SingularAttribute<OrderLine, OrderMaster> orderId;
    public static volatile SingularAttribute<OrderLine, String> id;

}