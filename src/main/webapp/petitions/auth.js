//import {handleCredentialLogin} from "./login";
handleCredentialLogin = require('./login').handleCredentialLogin;
function handleClick() {
    // Define your click event handler logic here
    setTimeout(() => {
        console.log('waited 1 second')
    }, 5000);
    console.log('Button clicked!');
}
const LoginButton = {

    view: () => (
        m("span",{onclick:handleClick},[
            m("span", {
                "id":"g_id_onload",
                "data-client_id":"104636050317-co6udvrjtefucqpvpp5a00i93kj8qf2r.apps.googleusercontent.com",
                "data-callback":"handleCredentialLogin"
            }),
            m("span", {
                "class":"g_id_signin",
                "data-type":"standard"}),
        ])
    )
}


module.exports = { LoginButton};
