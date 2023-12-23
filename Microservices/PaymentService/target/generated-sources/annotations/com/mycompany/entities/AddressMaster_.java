package com.mycompany.entities;

import com.mycompany.entities.Pincodes;
import com.mycompany.entities.Users;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(AddressMaster.class)
public class AddressMaster_ { 

    public static volatile SingularAttribute<AddressMaster, Pincodes> pincode;
    public static volatile SingularAttribute<AddressMaster, String> id;
    public static volatile SingularAttribute<AddressMaster, Users> userId;
    public static volatile SingularAttribute<AddressMaster, String> adderss;

}