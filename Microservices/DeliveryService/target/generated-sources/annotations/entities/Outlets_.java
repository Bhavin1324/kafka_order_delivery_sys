package entities;

import entities.DeliveryPerson;
import entities.OrderMaster;
import entities.Pincodes;
import java.math.BigInteger;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-15T09:54:08", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(Outlets.class)
public class Outlets_ { 

    public static volatile CollectionAttribute<Outlets, OrderMaster> orderMasterCollection;
    public static volatile SingularAttribute<Outlets, Pincodes> pincode;
    public static volatile SingularAttribute<Outlets, String> address;
    public static volatile SingularAttribute<Outlets, Double> latitude;
    public static volatile SingularAttribute<Outlets, String> name;
    public static volatile CollectionAttribute<Outlets, DeliveryPerson> deliveryPersonCollection;
    public static volatile SingularAttribute<Outlets, String> id;
    public static volatile SingularAttribute<Outlets, BigInteger> phoneNo;
    public static volatile SingularAttribute<Outlets, Double> longitude;

}