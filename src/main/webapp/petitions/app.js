import HomeComponent from './components/homeComponent';
import MenuComponent from './components/menuComponent';
import PetitionFormComponent from './components/petitionFormComponent';
import {PetitionsComponent, PetitionDetail} from './components/petitionsComponent';
import {User} from './login';
//const User = require('../auth').User;


const isLoggedIn = sessionStorage.getItem('user') ?
    JSON.parse(sessionStorage.getItem('user') ).ID!== null
    : false;

const data = {
    isLoggedIn: isLoggedIn,
    user: JSON.parse(sessionStorage.getItem('user') )
};



//m.mount(document.getElementById("header"), m(MenuComponent,data));
m.mount(document.getElementById("header"), {view: function () {return m(MenuComponent, data)}})

m.route.prefix = "#!";
m.route(document.getElementById("app"), "/", {
    "/": HomeComponent,
    "/petitions": PetitionsComponent,
    "/petitions/:id": PetitionDetail,
    "/petitions/edition": PetitionFormComponent,
});

