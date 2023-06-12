package petition;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.search.SortExpression.SortDirection;;

@Api(
    name = "petApi",
    version = "v1",
    audiences = "595899669842-j10210tmvuepept0tneskr8ouh81h4hr.apps.googleusercontent.com",
    clientIds = {
        "559682838482-rej4u4s7cgn3715987div24imqialps6.apps.googleusercontent.com",
        "595899669842-j10210tmvuepept0tneskr8ouh81h4hr.apps.googleusercontent.com"
    },
    namespace = @ApiNamespace(
        ownerDomain = "miage.exemple.com",
        ownerName = "miage.exemple.com",
        packagePath = ""
    )
)

public class PetitionEndpoint {

    

    @ApiMethod(name = "petitions", httpMethod = HttpMethod.GET)
    public List<Entity> petitions() {
        Query query = new Query("Petition"); //.addSort("petition", SortDirection.DESCENDING);

        DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery pq = ds.prepare(query);
        List<Entity> res = pq.asList(FetchOptions.Builder.withChunkSize(50));

        return res;
    }

    @ApiMethod(name = "addPetition", path = "petition", httpMethod = HttpMethod.POST)
    public Entity postPetittion(Petition pet){

        Entity e = new Entity("Petition","1+ Pet");

        e.setProperty("owner", pet.owner);
        e.setProperty("subject", pet.subject);
        e.setProperty("date_publication", new Date());
        e.setIndexedProperty("description", pet.description);
        e.setIndexedProperty("counter", 0);

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(e);
        return e;
    }
}

