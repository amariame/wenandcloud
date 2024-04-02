export default class PetitionFormComponent {

    petition = {}
    constructor(vnode) {

    }

    oninit(vnode) {
        console.log("initialized")
        vnode.attrs.id ? this.petition = {id: 1, title: "Première pétition", description: "Ceci est la première pétition"}
            : this.petition = {}
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

    onsubmitForm() {
        var options;
        this.petition.id
            ? options = {method: "PUT", url: "_petition/api/apiPetition/V1/updatePetition/"+this.petition.id}
            : options = {method: "POST", url: "_petition/api/apiPetition/V1/createPetition/"}
        console.log('data before send');
        this.petition.id = 14;
        console.log(this.petition);
        return m.request({
            method: "POST",
            url: "/_petition/api/apiPetition/v1/createpetition",
            body: this.petition,
            serialize: JSON
        })
            .then((res) => {
                console.log(res);
                m.route.set('/petitions')
            })
            .catch((error) => {
                console.log("error");
            });
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
                                <input type="text" className="form-control" id="petition-title" name={"title"}
                                    value={this.petition.title ?? ""}
                                       oninput={(e) => {this.petition.title = e.target.value}}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="3" name={"description"}
                                          oninput={(e)=>{this.petition.description = e.target.value}}>
                                    { this.petition.description ?? ""}
                                </textarea>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary"
                                    onclick={()=>{m.route.set('/petitions')}}>
                                    Annuler
                                </button>
                                <button type="button" className="btn btn-primary"
                                    onclick={()=>{this.onsubmitForm()}}>
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