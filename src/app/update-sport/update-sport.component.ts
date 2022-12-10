import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-update-sport',
  templateUrl: './update-sport.component.html',
  styles: [
  ]
})
export class UpdateSportComponent implements OnInit {

  currentSport = new Sport();
  categories! : Categorie[];
  updatedCatId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private SportService: SportService) { }

  ngOnInit(): void {
    this.SportService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });


    this.SportService.consulterSport(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentSport = prod; 
      this.updatedCatId =   this.currentSport.categorie.idCat;
    
    } ) ;
    }
    

  

  updateSport() {
    this.currentSport.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!;
         this.SportService.updateSport(this.currentSport).subscribe(prod => {
      this.router.navigate(['sports']); }
      );
  }

}
