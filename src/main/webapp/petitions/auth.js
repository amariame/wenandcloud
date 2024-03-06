function handleCredentialResponse(response) {
  const responsePayload  = jwt_decode(response.credential);

  console.log(response);
}

const LoginButton = {
    view: () => (
        m("span",[
            m("span", {
                "id":"g_id_onload",
                "data-client_id":"104636050317-co6udvrjtefucqpvpp5a00i93kj8qf2r.apps.googleusercontent.com",
                "data-callback":"handleCredentialResponse"
            }),
            m("span", {
                "class":"g_id_signin",
                "data-type":"standard"}),
        ])
    )
}

module.exports = { LoginButton, handleCredentialResponse };
