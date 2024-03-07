function logout() {
    alert("You have been logged out");
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    m.route.set("/");
    window.location.reload();
}

var ImgComponent = {
    view: function(vnode) {
        const {src, alt} = vnode.attrs;
        return m("img", {src: src, alt:alt, width: "50", height: "50", class: "rounded-circle", onclick: logout});
    }
}

module.exports = ImgComponent;