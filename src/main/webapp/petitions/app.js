import HomeComponent from './components/homeComponent';
import MenuComponent from './components/menuComponent';
import PetitionsComponent from './components/petitionsComponent';


m.mount(document.getElementById("header"), MenuComponent);

m.route.prefix = "#!";
m.route(document.getElementById("app"), "/", {
    "/": HomeComponent,
    "/petitions": PetitionsComponent,
});

