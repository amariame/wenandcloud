export default class PetitionDetailComponent {
    constructor(vnode) {
        this.petitions = {}
    }

    oninit(vnode) {
        console.log("initialized")
        console.log(vnode.attrs)
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
