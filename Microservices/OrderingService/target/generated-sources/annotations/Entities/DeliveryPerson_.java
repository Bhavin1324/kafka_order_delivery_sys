package Entities;

import Entities.OrderMaster;
import Entities.Outlets;
import Entities.Users;
import java.math.BigInteger;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-20T11:49:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(DeliveryPerson.class)
public class DeliveryPerson_ { 

    public static volatile CollectionAttribute<DeliveryPerson, OrderMaster> orderMasterCollection;
    public static volatile SingularAttribute<DeliveryPerson, Double> letitude;
    public static volatile SingularAttribute<DeliveryPerson, String> currentStatus;
    public static volatile SingularAttribute<DeliveryPerson, Outlets> outletId;
    public static volatile SingularAttribute<DeliveryPerson, BigInteger> adhaarNumber;
    public static volatile SingularAttribute<DeliveryPerson, String> id;
    public static volatile SingularAttribute<DeliveryPerson, Double> longitude;
    public static volatile SingularAttribute<DeliveryPerson, Users> username;

}