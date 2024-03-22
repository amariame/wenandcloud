export default class PetitionFormComponent {
    constructor(vnode) {
        this.petition = {}
    }

    oninit(vnode) {
        console.log("initialized")
        console.log(vnode.attrs)
        vnode.attrs.id ? this.petition = {id: 1, title: "Première pétition", description: "Ceci est la première pétition"}
            : this.petitions = {}
        console.log(this.petition)
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

    onsubmitForm(petition) {
        this.petition.id
            ? options = {method: "PUT", url: "_petition/api/apiPetition/V1/updatePetition/"+this.petition.id}
            : options = {method: "POST", url: "_petition/api/apiPetition/V1/createPetition/"}
        return m.request({method: "POST", url: "_petition/api/apiPetition/V1/createPetition/"})
            .then((res) => {
                console.log(res);
                m.route.set('/petitions')
            })
    }

    view() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Créer une pétition</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Titre</label>
                                <input type="text" className="form-control" id="petition-title"
                                    value={this.petition.title ?? ""}/>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="3">
                                    { this.petition.description ?? ""}
                                </textarea>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary"
                                    onclick={()=>{m.route.set('/petitions')}}>
                                    Annuler
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Valider
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}