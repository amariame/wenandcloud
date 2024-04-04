export default class PetitionDetailComponent {
    constructor(vnode) {
        this.petition = {}
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
                            <m.route.Link href={`/petitions/sign/${petition.id}/data.user.email`}
                                          className="btn btn-outline-primary">
                                Signer
                            </m.route.Link>
                        </p>
                        <hr></hr>
                        <p>{this.petition.description}</p>
                    </article>
                </div>
            </div>
        )
    }
}
