function handleCredentialLogin(response) {
    const responsePayload  = jwt_decode(response.credential);
    User.name = responsePayload.name;
    User.img = responsePayload.picture;
    User.ID = responsePayload.sub;
    User.token = response.credential;
    sessionStorage.setItem('user', JSON.stringify(User));
    alert('Welcome ' + User.name);
    User = JSON.parse(sessionStorage.getItem('user'));
    m.redraw();
}

let User = {
    name: "",
    img: "",
    ID: null,
    token: "",
}

module.exports = { handleCredentialLogin, User};