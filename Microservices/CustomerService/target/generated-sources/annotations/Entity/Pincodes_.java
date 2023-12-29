package Entity;

import Entity.AddressMaster;
import Entity.Outlets;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-17T11:54:42", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(Pincodes.class)
public class Pincodes_ { 

    public static volatile SingularAttribute<Pincodes, Integer> pincode;
    public static volatile CollectionAttribute<Pincodes, AddressMaster> addressMasterCollection;
    public static volatile SingularAttribute<Pincodes, String> district;
    public static volatile CollectionAttribute<Pincodes, Outlets> outletsCollection;
    public static volatile SingularAttribute<Pincodes, String> state;

}