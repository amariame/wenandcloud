const LoginButton = require('../auth').LoginButton;
const User = require('../auth').User;
const ImgComponent = require('../components/imgComponent');


const MenuComponent = {
    view : (vnode) => (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TyniPet</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollaalert('Welcome ' + User.name);pse" aria-controls="navbarCollapse"
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
                        <div>
                            {vnode.attrs.isLoggedIn ? (
                                <div class="d-flex align-items-center">
                                    <p class="px-3"> Admin</p>
                                    <ImgComponent src={vnode.attrs.user.img} alt="Profile picture"/>
                                </div>
                            ) : (
                                <LoginButton/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

module.exports = MenuComponent;
