function handleCredentialLogin(response) {
    const responsePayload  = jwt_decode(response.credential);
    User.name = responsePayload.name;
    User.img = responsePayload.picture;
    User.ID = responsePayload.sub;
    User.token = response.credential;
    console.log(User);
    sessionStorage.setItem('user', User);
    m.redraw();
}

let User = {
    name: "",
    img: "",
    ID: null,
    token: "",
}

module.exports = { handleCredentialLogin, User};