import { Categorie } from "./categorie.model";

export class Sport {
    idSport! : number;
    nomSport! : string;
    prixSport! : number;
    dateCreation! : Date ;
    categorie! : Categorie;
    }