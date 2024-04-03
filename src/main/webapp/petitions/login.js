function handleCredentialLogin(response) {
    const responsePayload  = jwt_decode(response.credential);
    User.name = responsePayload.name;
    User.img = responsePayload.picture;
    User.ID = responsePayload.sub;
    User.token = response.credential;
    User.email = responsePayload.email;
    sessionStorage.setItem('user', JSON.stringify(User));

    User = sessionStorage.getItem('user') ?
        JSON.parse(sessionStorage.getItem('user'))
        : null;
    m.redraw();
    window.location.reload();
}

let User = {
    name: "",
    img: "",
    ID: null,
    token: "",
    email: "",
}

User = sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user') )
    : {
        name: "",
        img: "",
        ID: null,
        token: "",
        email: "",
    };

const isLoggedIn = User.ID !== null;

let data = {
    isLoggedIn: isLoggedIn,
    user: User,
    token: '?access_token=' + encodeURIComponent(User.token)
};

module.exports = { handleCredentialLogin, User, data};