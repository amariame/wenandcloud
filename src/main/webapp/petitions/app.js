import HomeComponent from './components/homeComponent';
import MenuComponent from './components/menuComponent';
import PetitionsComponent from './components/petitionsComponent';
import {User} from './login';
//const User = require('../auth').User;


const isLoggedIn = JSON.parse(sessionStorage.getItem('user') ).ID!== null;

const data = {
    isLoggedIn: isLoggedIn,
    user: User
};



//m.mount(document.getElementById("header"), m(MenuComponent,data));
m.mount(document.getElementById("header"), {view: function () {return m(MenuComponent, data)}})

m.route.prefix = "#!";
m.route(document.getElementById("app"), "/", {
    "/": HomeComponent,
    "/petitions": PetitionsComponent,
});

