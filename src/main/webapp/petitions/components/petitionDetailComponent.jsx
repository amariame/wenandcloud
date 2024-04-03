export default class PetitionDetailComponent {
    constructor(vnode) {
        this.petition = {}
    }

    oninit(vnode) {
        console.log("initialized")
        return m.request({
            method: "GET",
            url: "/_petition/api/apiPetition/v1/getPetition/"+vnode.attrs.id
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log("error");
                console.error(error);
            });
        this.petition = {id: 1, title: "Première pétition", description: "Ceci est la première pétition"}
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
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.petition.title}</h1>
                        <p>{this.petition.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
