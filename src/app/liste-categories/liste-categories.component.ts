import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: [
  ]
})
export class ListeCategoriesComponent implements OnInit {

  categories!: Categorie[];

  ajout:boolean=true;


  updatedCat:Categorie = {"idCat":0,"nomCat":""};

  
  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    
    this.chargerCategories();
  }


  chargerCategories() {
    this.sportService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });

  }

  categorieUpdated(cat:Categorie) {
    console.log("catégorie reçue du composant updateCAtegorie ",cat);
    this.sportService.ajouterCategorie(cat).subscribe( ()=> this.chargerCategories());


  }

  updateCat(cat :Categorie)
  {
    this.updatedCat = cat;
    this.ajout=false;
  }
  supprimerCat(cat :Categorie) {
  let conf = confirm("Etes-vous sûr ?");
if (conf)
 this.sportService.supprimerCategorie(cat.idCat).subscribe(() => {
        console.log("categorie supprimé");
        this.chargerCategories() 

});
}
}
