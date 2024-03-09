package com.mycompany.entities;

import com.mycompany.entities.AddressMaster;
import com.mycompany.entities.DeliveryPerson;
import com.mycompany.entities.OrderMaster;
import com.mycompany.entities.Ratings;
import com.mycompany.entities.UserRoles;
import java.math.BigInteger;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-02-24T18:20:12", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(Users.class)
public class Users_ { 

    public static volatile CollectionAttribute<Users, UserRoles> userRolesCollection;
    public static volatile CollectionAttribute<Users, Ratings> ratingsCollection;
    public static volatile SingularAttribute<Users, BigInteger> phoneNo;
    public static volatile CollectionAttribute<Users, OrderMaster> orderMasterCollection;
    public static volatile SingularAttribute<Users, String> password;
    public static volatile SingularAttribute<Users, byte[]> profilePhoto;
    public static volatile SingularAttribute<Users, Double> credits;
    public static volatile CollectionAttribute<Users, AddressMaster> addressMasterCollection;
    public static volatile SingularAttribute<Users, String> name;
    public static volatile CollectionAttribute<Users, DeliveryPerson> deliveryPersonCollection;
    public static volatile SingularAttribute<Users, String> id;
    public static volatile SingularAttribute<Users, String> email;
    public static volatile SingularAttribute<Users, String> username;

}