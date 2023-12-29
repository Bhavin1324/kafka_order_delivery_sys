package com.mycompany.entities;

import com.mycompany.entities.Items;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:53", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(TaxSlabs.class)
public class TaxSlabs_ { 

    public static volatile SingularAttribute<TaxSlabs, Integer> percentage;
    public static volatile CollectionAttribute<TaxSlabs, Items> itemsCollection;
    public static volatile SingularAttribute<TaxSlabs, String> id;

}