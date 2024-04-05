export default class PetitionsComponent {
    constructor(vnode) {

        this.petitions = [];
        this.isMyPet = false;
    }

    signPetition(petitionId){
        return m.request({
            metod: "GET",
            url: "/_petition/api/apiPetition/v1/signPetition/"+petitionId
        })
            .then((res) => {
                console.log(res);
                this.petitions.push({...res.properties, id:res.key.id});
                console.log(this.petitions);
                //m.route.set('/petitions')
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
    }

    oninit(vnode) {



        return m.request({
            method: "GET",
            url: this.isMyPet
                ? "/_petition/api/apiPetition/v1/getPetitionsByOwner"
                : "/_petition/api/apiPetition/v1/petitionliste"
        })
            .then((res) => {
                console.log(res);
                res.items.map((item) => {
                    this.petitions.push({...item.properties, id:item.key.id});
                });
                console.log(this.petitions);
                //m.route.set('/petitions')
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
    }
    oncreate(vnode) {
        console.log("DOM created")
        this.isMyPet  = m.route.get() === "/mes-petitions"
    }
    onbeforeupdate(newVnode, oldVnode) {
        return true
    }
    onupdate(vnode) {
        console.log("DOM updated")
        this.isMyPet  = m.route.get() === "/mes-petitions"
    }
    onbeforeremove(vnode) {
        console.log("exit animation can start")
        return new Promise(function(resolve) {
            // call after animation completes
            resolve()
        })
    }
    onremove(vnode) {
        console.log("removing DOM element")
    }

    view() {
        return (
            <div className="container">

                {this.isMyPet ?
                    (<m.route.Link href="/petitions/create" className="btn btn-primary">
                        Poster une pétition
                    </m.route.Link>) :("")
                }
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {this.petitions.map(petition => (
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"/>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">{petition.title}</text>
                                </svg>

                                <div className="card-body">
                                    <p className="card-text">{petition.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <m.route.Link href={`/petitions/${petition.id}/view`}
                                                          className="btn btn-outline-primary">
                                                Détails
                                            </m.route.Link>
                                            {this.isMyPet ?
                                            (<m.route.Link href={`/petitions/${petition.id}/edit`}
                                                              className="btn btn-outline-primary">
                                                    Edit
                                                </m.route.Link>)
                                            :(<button type="button" className="btn btn-sm btn-outline-secondary"
                                                    onclick={()=>this.signPetition(petition.id)}>
                                                    Signer
                                                </button>)
                                            }
                                        </div>
                                        <small className="text-muted">{petition.publication}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}