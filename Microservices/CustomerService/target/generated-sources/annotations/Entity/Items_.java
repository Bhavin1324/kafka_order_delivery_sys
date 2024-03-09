package Entity;

import Entity.ItemCategory;
import Entity.OrderLine;
import Entity.Ratings;
import Entity.TaxSlabs;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-02-24T18:19:40", comments="EclipseLink-2.7.10.v20211216-rNA")
@StaticMetamodel(Items.class)
public class Items_ { 

    public static volatile CollectionAttribute<Items, OrderLine> orderLineCollection;
    public static volatile SingularAttribute<Items, TaxSlabs> taxSlabId;
    public static volatile SingularAttribute<Items, Boolean> isVeg;
    public static volatile CollectionAttribute<Items, Ratings> ratingsCollection;
    public static volatile SingularAttribute<Items, Double> price;
    public static volatile SingularAttribute<Items, String> name;
    public static volatile SingularAttribute<Items, String> description;
    public static volatile SingularAttribute<Items, String> id;
    public static volatile SingularAttribute<Items, ItemCategory> categoryId;
    public static volatile SingularAttribute<Items, byte[]> itemImage;

}