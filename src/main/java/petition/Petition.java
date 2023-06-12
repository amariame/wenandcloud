package petition;

import java.util.Date;
import java.util.List;


public class Petition {
    public String owner;
    public String subject;
    public String description;
    public Date date_publication;
    public int counter;
    public int objectif;
    public List<String> tag;
    public List<String> signedby;
    
    public Petition(){}
}
