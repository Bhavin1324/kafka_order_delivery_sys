package com.mycompany.entities;

import com.mycompany.entities.Items;
import com.mycompany.entities.Users;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(Ratings.class)
public class Ratings_ { 

    public static volatile SingularAttribute<Ratings, Items> itemId;
    public static volatile SingularAttribute<Ratings, String> id;
    public static volatile SingularAttribute<Ratings, Integer> stars;
    public static volatile SingularAttribute<Ratings, Users> userId;

}