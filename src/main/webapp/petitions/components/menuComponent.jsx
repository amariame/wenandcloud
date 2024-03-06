const LoginButton = require('../auth').LoginButton;

const MenuComponent = {
    view : () => (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TyniPet</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <m.route.Link className="nav-link" href="/">Accueil</m.route.Link>
                        </li>
                        <li class="nav-item">
                            <m.route.Link className="nav-link" href="/petitions">Pétition</m.route.Link>
                        </li>

                        <li class="nav-item">
                            <m.route.Link className="nav-link" href="/mes-petitions">Mes pétition</m.route.Link>
                        </li>
                        <li class="nav-item">
                            <m.route.Link className="nav-link" href="/apropos">Apropos</m.route.Link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <h6 class="text-white">Bienvenue</h6>
                        <LoginButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

module.exports = MenuComponent;
