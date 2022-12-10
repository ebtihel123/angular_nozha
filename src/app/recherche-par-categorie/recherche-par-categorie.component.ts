import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Sport } from '../model/sport.model';
import { SportsComponent } from '../sports/sports.component';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  IdCategorie! : number;
  categories! : Categorie[];
  sports! : Sport[];


  constructor(private sportService : SportService) { }

  ngOnInit(): void {
    this.sportService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
    });

  }

  onChange() {
    this.sportService.rechercherParCategorie(this.IdCategorie).
      subscribe(prods =>{this.sports=prods});

    }

}
