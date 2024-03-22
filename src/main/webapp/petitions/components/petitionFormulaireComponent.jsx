
const PetitionFormulaireComponent = {
    petition: {},

    oninit: (vnode) => {
        this.petition = vnode.attrs.petition;
    },
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

module.exports = {PetitionFormComponent: PetitionFormulaireComponent};


/**
 *  const PetitionsComponent = {
 *     petitions: [],
 *
 *     oninit: () =>{
 *         this.petitions = [
 *             {id: 1, title: "Première pétition", description: "Ceci est la première pétition"},
 *             {id: 2, title: "Deuxième pétition", description: "Ceci est la deuxième pétition"},
 *             {id: 3, title: "Troisième pétition", description: "Ceci est la troisième pétition"},
 *             {id: 4, title: "Quatrième pétition", description: "Ceci est la quatrième pétition"},
 *             {id: 5, title: "Cinquième pétition", description: "Ceci est la cinquième pétition"},
 *             {id: 6, title: "Sixième pétition", description: "Ceci est la sixième pétition"},
 *             {id: 7, title: "Septième pétition", description: "Ceci est la septième pétition"},
 *             {id: 8, title: "Huitième pétition", description: "Ceci est la huitième pétition"},
 *             {id: 9, title: "Neuvième pétition", description: "Ceci est la neuvième pétition"},
 *             {id: 10, title: "Dixième pétition", description: "Ceci est la dixième pétition"},
 *             {id: 11, title: "Onzième pétition", description: "Ceci est la onzième pétition"},
 *             {id: 12, title: "Douzième pétition", description: "Ceci est la douzième pétition"},
 *             {id: 13, title: "Treizième pétition", description: "Ceci est la treizième pétition"},
 *             {id: 14, title: "Quatorzième pétition", description: "Ceci est la quatorzième pétition"},
 *             {id: 15, title: "Quinzième pétition", description: "Ceci est la quinzième pétition"},
 *             {id: 16, title: "Seizième pétition", description: "Ceci est la seizième pétition"},
 *         ]
 *     },
 *     onremove: () =>{
 *         console.log('leave petition')
 *     },
 *
 *     view : () => (
 *         <div className="container">
 *             <m.route.Link href="/petitions/edition" className="btn btn-primary">
 *                 Poster une pétition
 *             </m.route.Link>
 *             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#petitionModal">
 *                 Launch static modal
 *             </button>
 *             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
 *                 {this.petitions.map(petition => (
 *                     <div className="col">
 *                         <div className="card shadow-sm">
 *                             <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
 *                                  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
 *                                  preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
 *                                 <rect width="100%" height="100%" fill="#55595c"/>
 *                                 <text x="50%" y="50%" fill="#eceeef" dy=".3em">{petition.title}</text>
 *                             </svg>
 *
 *                             <div className="card-body">
 *                                 <p className="card-text">{petition.description}</p>
 *                                 <div className="d-flex justify-content-between align-items-center">
 *                                     <div className="btn-group">
 *                                         <button type="button" className="btn btn-sm btn-outline-secondary"
 *                                                 data-bs-toggle="modal"  data-bs-target="#petitionModal"
 *                                                 onclick={() =>PetitionModal.openModal({petition})}>View</button>
 *                                         <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
 *                                     </div>
 *                                     <small className="text-muted">9 mins</small>
 *                                 </div>
 *                             </div>
 *                         </div>
 *                     </div>
 *                 ))}
 *             </div>
 *             <PetitionModal/>
 *         </div>
 *     )
 * }
 *
 * const PetitionDetail = {
 *     petition: {},
 *
 *     oninit: () => {
 *         this.petition = {id: 1, title: "Première pétition", description: "Ceci est la première pétition"}
 *     },
 *
 *     view : () => (
 *         <div className="container">
 *             <div className="row">
 *                 <div className="col-md-12">
 *                     <h1>{this.petition.title}</h1>
 *                     <p>{this.petition.description}</p>
 *                 </div>
 *             </div>
 *         </div>
 *     )
 * }
 *
 *
 * function closeModal() {
 *     this.isOpen = false;
 * }
 *
 * async function submitForm (){
 *     alert("Form submitted");
 *     console.log("Form submitted");
 *     closeModal();
 * }
 *
 * const PetitionModal = function (){
 *     var petition;
 *     isOpen= false;
 *
 *     function openModal(petition) {
 *         PetitionModal.petition = petition;
 *         PetitionModal.isOpen = true;
 *         console.log(this.petition);
 *     }
 *
 *     view : () => {return(
 *         <div>
 *             <div className="modal fade" id="petitionModal" tabindex="-1"
 *                  style={{ display: this.isOpen ? 'block' : 'none' }}
 *                  data-bs-backdrop="static"
 *                  aria-labelledby="exampleModalLabel"    aria-hidden="true">
 *                 <div className="modal-dialog">
 *                     <div className="modal-content">
 *                         <div className="modal-header">
 *                             <h5 className="modal-title" id="exampleModalLabel">Poster une pétition</h5>
 *                             <button type="button" className="btn-close" data-bs-dismiss="modal"
 *                                     aria-label="Close"></button>
 *                         </div>
 *                         <div className="modal-body">
 *                             <form>
 *                                 <div className="mb-3">
 *                                     <label for="title" className="form-label">Titre</label>
 *                                     <input type="text" class="form-control" id="petition-title"
 *                                            value={petition.title}
 *                                            oninput={(e) => { PetitionModal.petition.title = e.target.value; }}/>
 *
 *                                 </div>
 *                                 <div className="mb-3">
 *                                     <label for="description" className="form-label">Description</label>
 *                                     <textarea className="form-control" id="description" rows="3">
 *                                         {petition.description}
 *                                     </textarea>
 *                                 </div>
 *                             </form>
 *                         </div>
 *                         <div className="modal-footer">
 *                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onclick={closeModal}>
 *                                 Close
 *                             </button>
 *                             <button type="button" className="btn btn-primary" onclick={submitForm}>
 *                                 Save changes
 *                             </button>
 *                         </div>
 *                     </div>
 *                 </div>
 *             </div>
 *         </div>
 *     )}
 * }
 *
 * module.exports = {PetitionsComponent, PetitionDetail};
 */
