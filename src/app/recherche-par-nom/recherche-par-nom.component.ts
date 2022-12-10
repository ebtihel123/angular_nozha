import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomSport! : string;
  sports!: Sport[];
  allSports!: Sport[];
  searchTerm!: string;
 
  
  constructor(private sportService : SportService) { }

  ngOnInit(): void {
    this.sportService.listeSport().subscribe(prods => {
      console.log(prods);
      this.sports = prods;
      });
      
  }

  rechercherProds(){
    this.sportService.rechercherParNom(this.nomSport).subscribe(prods => {
      console.log(prods);
      this.sports=prods;});
  }

  onKeyUp(filterText : string){
    this.sports = this.allSports.filter(item =>
    item.nomSport.toLowerCase().includes(filterText));
    }
    

}
