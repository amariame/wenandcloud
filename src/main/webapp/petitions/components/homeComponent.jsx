
const HomeComponent = {
    view : () => {
        return(
            <div>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#777"/>
                            </svg>

                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Tyni pet.</h1>
                                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Deposer une pétition</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#777"/>
                            </svg>

                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Tyni pet</h1>
                                    <p>Rejoignez-nous dans notre lutte pour un monde plus juste, équitable et durable.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Ensemble, agissons !</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#777"/>
                            </svg>

                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>Tyni pet</h1>
                                    <p>Unissons nos voix pour le changement : Signez notre pétition dès maintenant !</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Signer une petition</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/*
                    <div class="container marketing">
                        <div class="row">
                            {this.petitions.map(petition => (
                                <div className="col-lg-4">
                                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                                         preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#777"/>
                                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                                    </svg>

                                    <h2>{petition.title}</h2>
                                    <p>{petition.description}</p>
                                    <p>
                                        <m.route.Link href={`/petitions/${petition.id}/view`}
                                                      className="btn btn-outline-primary">
                                            Détails
                                        </m.route.Link>
                                    </p>
                                </div>
                            ))}

                        </div>
                        <div class="row featurette">
                            <div class="col-md-7">
                                <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span>
                                </h2>
                                <p class="lead">Some great placeholder content for the first featurette here. Imagine
                                    some
                                    exciting prose here.</p>
                            </div>
                            <div class="col-md-5">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                     width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                                     aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                     focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"/>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>

                            </div>
                        </div>

                    </div>
                */}
            </div>
        )
    },
}

module.exports = HomeComponent;
