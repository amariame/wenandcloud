export default class PetitionsComponent {
    constructor(vnode) {
        this.count = 0
        this.petitions = []
    }
    increment() {
        this.count += 1
    }
    decrement() {
        this.count -= 1
    }

    oninit(vnode) {
        console.log("initialized")
        this.petitions = [
            {id: 1, title: "Première pétition", description: "Ceci est la première pétition"},
            {id: 2, title: "Deuxième pétition", description: "Ceci est la deuxième pétition"},
            {id: 3, title: "Troisième pétition", description: "Ceci est la troisième pétition"},
            {id: 4, title: "Quatrième pétition", description: "Ceci est la quatrième pétition"},
            {id: 5, title: "Cinquième pétition", description: "Ceci est la cinquième pétition"},
            {id: 6, title: "Sixième pétition", description: "Ceci est la sixième pétition"},
            {id: 7, title: "Septième pétition", description: "Ceci est la septième pétition"},
            {id: 8, title: "Huitième pétition", description: "Ceci est la huitième pétition"},
            {id: 9, title: "Neuvième pétition", description: "Ceci est la neuvième pétition"},
            {id: 10, title: "Dixième pétition", description: "Ceci est la dixième pétition"},
            {id: 11, title: "Onzième pétition", description: "Ceci est la onzième pétition"},
            {id: 12, title: "Douzième pétition", description: "Ceci est la douzième pétition"},
            {id: 13, title: "Treizième pétition", description: "Ceci est la treizième pétition"},
            {id: 14, title: "Quatorzième pétition", description: "Ceci est la quatorzième pétition"},
            {id: 15, title: "Quinzième pétition", description: "Ceci est la quinzième pétition"},
            {id: 16, title: "Seizième pétition", description: "Ceci est la seizième pétition"},
        ]
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
                <m.route.Link href="/petitions/create" className="btn btn-primary">
                    Poster une pétition
                </m.route.Link>
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
                                            <m.route.Link href={`/petitions/${petition.id}/edit`}
                                                          className="btn btn-outline-primary">
                                                Edit
                                            </m.route.Link>
                                        </div>
                                        <small className="text-muted">9 mins</small>
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