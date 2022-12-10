import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport.model';
import { AuthService } from '../services/auth.service';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html'
})
export class SportsComponent implements OnInit {

    sports? : Sport[]; //un tableau de produits

  constructor(private sportService: SportService,
              public authService: AuthService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerSports();
  }

  chargerSports(){
    this.sportService.listeSport().subscribe(prods => {
      console.log(prods);
      this.sports = prods;
      });
  }

supprimerSport(p: Sport)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.sportService.supprimerSport(p.idSport).subscribe(() => {
        console.log("sport supprimé");
        this.chargerSports();     
      
});
}
 
 

}
