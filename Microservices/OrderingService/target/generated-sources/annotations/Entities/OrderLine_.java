package Entities;

import Entities.Items;
import Entities.OrderMaster;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-20T11:49:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(OrderLine.class)
public class OrderLine_ { 

    public static volatile SingularAttribute<OrderLine, Items> itemId;
    public static volatile SingularAttribute<OrderLine, Integer> quantity;
    public static volatile SingularAttribute<OrderLine, OrderMaster> orderId;
    public static volatile SingularAttribute<OrderLine, String> id;

}