package foo;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.response.UnauthorizedException;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.datastore.Transaction;

import java.util.Date;
import java.util.List;

@Api(name = "apiPetition",
    version = "v1",
    audiences = "104636050317-co6udvrjtefucqpvpp5a00i93kj8qf2r.apps.googleusercontent.com",
    clientIds = {"104636050317-co6udvrjtefucqpvpp5a00i93kj8qf2r.apps.googleusercontent.com",
            "927375242383-jm45ei76rdsfv7tmjv58tcsjjpvgkdje.apps.googleusercontent.com",},
    namespace =
    @ApiNamespace(
        ownerDomain = "helloworld.example.com",
        ownerName = "petition.dev.test",
        packagePath = ""
    )
)

public class PetitonEndpoint {

    @ApiMethod(name = "petitionliste", httpMethod = HttpMethod.GET)
    public List<Entity> petitionliste() {
        Query q = new Query("Petition").addSort("publication", SortDirection.DESCENDING);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> result = pq.asList(FetchOptions.Builder.withLimit(100));
        return result;
    }

    @ApiMethod(name = "createpetition", httpMethod = HttpMethod.POST)
    public Entity createpetition(User user, Petition petition)
    throws UnauthorizedException {

        if (user == null) {
            throw new UnauthorizedException("Invalid credentials");
        }


        Entity e = new Entity("Petition");
        e.setProperty("owner", user.getEmail());
        e.setProperty("description", petition.getDescription());
        e.setProperty("title", petition.getTitle());
        e.setProperty("publication", new Date());
        //e.setProperty("subscribers", new HashSet<String>());

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        
        Transaction txn = datastore.beginTransaction();
        datastore.put(e);
        txn.commit();
        return e;
    }


    @ApiMethod(name = "petitionget", httpMethod = HttpMethod.GET)
    public Entity petitionget(@Named("id") String id) {
        Key k = KeyFactory.createKey("Petition", Long.parseLong(id));
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        try {
            return datastore.get(k);
        } catch (EntityNotFoundException e) {
            return null;
        }
    }

}
