export default class PetitionDetailComponent {
    constructor(vnode) {
        this.petition = {}
    }

    signPetition(petitionId){
        return m.request({
            metod: "GET",
            url: "/_petition/api/apiPetition/v1/signPetition/"+petitionId+data.token
        })
            .then((res) => {
                console.log(res);
                this.petitions.push({...res.properties, id:res.key.id});
                console.log(this.petitions);
                m.route.set(m.route.get())
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
    }

    oninit(vnode) {
        console.log("initialized")
        return m.request({
            method: "GET",
            url: "/_petition/api/apiPetition/v1/petitionget/"+vnode.attrs.id
        })
            .then((res) => {
                console.log(res);
                this.petition = {...res.properties, id:res.key.id};
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
        //this.petition = {id: 1, title: "Première pétition", description: "Ceci est la première pétition"}
    }
    oncreate(vnode) {
        console.log("DOM created")
    }
    onbeforeupdate(newVnode, oldVnode) {
        return true
    }
    onupdate(vnode) {
        console.log("DOM updated")
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
                <div className="row g-5">
                    <article className="blog-post">
                        <h2 className="blog-post-title">{this.petition.title}</h2>
                        <p className="blog-post-meta">{this.petition.publication} by {this.petition.owner}</p>
                        <p>
                            { data.user.email === this.petition.owner ?
                                (<button type="button" className="btn btn-sm btn-outline-secondary"
                                        onClick={() => this.signPetition(this.petition.id)}>
                                    Signer
                                </button>) : ("")
                            }
                        </p>
                        <p>{this.petition.description}</p>
                    </article>
                </div>
            </div>
        )
    }
}
