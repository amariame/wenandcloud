package foo;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.response.UnauthorizedException;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.datastore.Transaction;

import java.util.Date;
import java.util.HashSet;
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

    @ApiMethod(name = "listPetition", httpMethod = HttpMethod.GET)
    public List<Entity> listPetition(User user) {
            //throws UnauthorizedException {
        /*if (user == null) {
            throw new UnauthorizedException("Invalid credentials");
        }*/

        Query q = new Query("Petition").addSort("publication", SortDirection.DESCENDING);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> result = pq.asList(FetchOptions.Builder.withLimit(100));
        return result;
    }

    @ApiMethod(name = "createPetition", httpMethod = HttpMethod.POST)
    public Entity createPetition(Petition petition, User user) {
        /*throws UnauthorizedException {

        if (user == null) {
            throw new UnauthorizedException("Invalid credentials");
        }*/

        Owner owner = new Owner();
        owner.id = user.getId();
        owner.name = user.getEmail();

        Entity e = new Entity("Petition");
        e.setProperty("owner", owner);
        e.setProperty("description", petition.description);
        e.setProperty("title", petition.title);
        e.setProperty("publication", new Date());
        e.setProperty("subscribers", new HashSet<Owner>());

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        Transaction txn = datastore.beginTransaction();
        datastore.put(e);
        txn.commit();
        return e;
    }
}
