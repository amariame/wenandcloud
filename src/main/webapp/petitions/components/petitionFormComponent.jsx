
const PetitionFormComponent = {
    petition: {},

    oninit: () => {},
    view : () => (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Créer une pétition</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titre</label>
                            <input type="text" className="form-control" id="petition-title"
                                   />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows="3">

                                    </textarea>
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary">
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

module.exports = {PetitionFormComponent};

