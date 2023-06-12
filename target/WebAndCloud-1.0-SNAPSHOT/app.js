var Login = {
    id: "",
    full: "",
    image:"",
    email:"",

    handleCredential: function(response) {
        const responsePayload = jwt_decode(response.credential);
        Login.id= responsePayload.sub;
        Login.full=responsePayload.name;
        Login.email=responsePayload.email;
        Login.image=responsePayload.picture;
        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('Given Name: ' + responsePayload.given_name);
        console.log('Family Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);

    }

}

var Petition = {
    list: [],
    listPetitions: function(){
        console.log('Petion list');
        
        return m.request({
            method: "GET",
            url: "_ah/api/petApi/v1/petitions/"
        })
        .then(function (result) {
            console.log(result); 
            if(result){
                Petition.list = result.items;
            }         
            
            
            // m.redraw(true) 
        })
    },
    addPetition: function(pet){
        console.log('Petion add');
        
        return m.request({
            method: "POST",
            url: "_ah/api/petApi/v1/petition?access_token="+this.Login,
            body: pet
        })
        .then(function (result) {
            console.log(result);
            Petition.listPetitions            
        }).catch(function(error) {
            console.log(error);
            
        });
    }    
}


var PetitionView = {
    oninit: Petition.listPetitions,
    view: function() {
        return m('div.col-md-9.col-lg-9.col-xs-12.col-12.row',[
            Petition.list.map(function(petition){               
                return m('div.col-3',[
                    m('div.card',[
                        m('div.card-body',[
                            m('h5.card-title',petition.properties.subjebt),
                            m('div.card-subtitle',[
                                m('p','Publié par '+petition.properties.owner),
                                m('p','Date publication '+petition.properties.date_publication),
                                m('p',petition.properties.counter+' signature(s)')
                            ]),
                            m('p.card-text', petition.properties.description),
                        ])
                    ])
                ])
            })
           
        ]);
    }
}

var PetitionCardView = {
    view: function(pet) {
        return m('div.card.h-100',[
            m('div.card-body',[
                m('h5.card-title',pet.subjebt),
                m('div.card-subtitle',[
                    m('p','Publié par owner '+pet.owner),
                    m('p','Date publication '+pet.date_publication),
                    m('p',pet.counter+' signature(s)')
                ]),
                m('p.card-text', pet.description),
                m(route.Link, {href: '#',class:'btn btn-primary'}, 'Je signe')
            ])
        ]);
    }
}

function handleCredentialResponse(response) {
    console.log("callback called:"+response.credential)
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    Login.handleCredential(response)
    m.redraw()

}


var LoginView = {
    view: function() {
         return m('div', [
            m('div', {
            "id":"g_id_onload",
            "data-client_id": "595899669842-j10210tmvuepept0tneskr8ouh81h4hr.apps.googleusercontent.com",
            "data-callback":"handleCredentialResponse"
            }),
            m('div', {
            class:"g_id_signin","data-type":"standard"
            }),
         ])
    }
  }

// Navbar component
var NavbarView = {
    view: function() {
        return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.mb-5", [
            m("a.navbar-brand", {href: "/"}, "TyniPet"),
            m("button.navbar-toggler", {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNav",
                "aria-controls": "navbarNav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
            }, [
                m("span.navbar-toggler-icon")
            ]),
            m("div.collapse.navbar-collapse", {id: "navbarNav"}, [
                m("ul.navbar-nav", [
                    m("li.nav-item", [
                        m("a.nav-link", {href: "#"}, "Home")
                    ]),
                    m("li.nav-item", [
                        m("a.nav-link", {href: "#!/nouvelle-petition"}, "Nouvelle petition")
                    ])
                ]),
                m('div.navbar-brand.ml-auto', [
                    Login.id === '' ? m(LoginView) : [
                        m('span', Login.full),
                        m('img.rounded-circle.ml-2', { src: Login.image, attrs: { width: '2px', height: '2px' } })
                    ]
                ])                               
            ])
        ]);
    }
};

var tags = [
    {value: 'education', label: 'Education'},
    {value: 'ecologie', label: 'Ecologie'},
    {value: 'retraite', label: 'Retraite'}
];

var PetitionFormView = {
    oninit: function(vnode){
        this.formData = {
            owner: Login.id,
            subject: '',
            description: '',
            objectif: 0,
            tag:[],
            signedBy:[]
        }
    },

    onsubmit: function(event) {
        event.preventDefault();
        Petition.addPetition(this.formData);
    },

    view: function(vnode){
        return m('div.col-md-3.col-lg-3.col-xs-12.col-12', [
            m('h1', 'Nouvelle petition'),
            m('form', { onsubmit: this.onsubmit.bind(this) }, [
              m('.form-group', [
                m('label', {for: 'subject'}, 'Sujet'),
                m('input.form-control', {
                    id: 'subject', 
                    type: 'text', 
                    placeholder: 'Sujet de la pétition',
                    oninput: function(event) {
                        this.formData.subject = event.target.value;
                    }.bind(this)
                }),
              ]),
              m('.form-group', [
                m('label', {for: 'description'}, 'Description'),
                m('textarea.form-control', {
                    id: 'description', 
                    rows: 5, 
                    placeholder: 'Description de la pétition',
                    oninput: function(event) {
                        this.formData.description = event.target.value;
                    }.bind(this)
                }),
              ]),
              m('.form-group', [
                m('label', {for: 'objectif'}, 'Objectif'),
                m('input.form-control', {
                    id: 'objectif', 
                    type: 'number', 
                    placeholder: 'Objectif de la pétition',
                    oninput: function(event) {
                        this.formData.objectif = event.target.value;
                    }.bind(this)
                }),
              ]),
              m('.form-group', [
                m('label', {for: 'tag'}, 'Hashtag'),
                m('select.form-control', {
                    multiple: true,
                        onchange: function(event) {
                            this.formData.tag.length = 0;
                            for (var i = 0; i < event.target.selectedOptions.length; i++) {
                                this.formData.tag.push(event.target.selectedOptions[i].value);
                            }
                        }
                    },
                    tags.map(function(tag) {
                        return m('option', {value: tag.value}, tag.label);
                    })                
                )
              ]),              
              m('button.btn.btn-primary', {type: 'submit'}, 'Publier'),
            ])
        ])
    }
};



var Hello = {
    view: function() {
        return m('div', {class:'container'}, [
            m(NavbarView),
            m('div.row',{class: 'main'},[
                m(PetitionView),
                m(PetitionFormView),
            ])
        ])
    }
 }


 // Render the navbar component
m.mount(document.body, Hello);



