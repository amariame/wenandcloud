const HomeComponent = {
    view : function() {
        return m("div", [
            m("h1", "Welcome to the Petition platform!"),
            m("p", "This app is a simple example of a petition app."),
            m("p", "Abou can create a new petition, sign a petition, and view all petitions.")
        ]);
    }
}

module.exports = HomeComponent;
