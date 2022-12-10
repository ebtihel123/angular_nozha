import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Sport } from '../model/sport.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/catgorieWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class SportService {
  apiURL: string = 'http://localhost:8088/sport/api';
  apiURLCat: string = 'http://localhost:8088/sport/cat';

  sports : Sport[]; //un tableau de psports
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
  
    this.sports = [{idSport: 1, nomSport : "PC Asus", prixSport : 3000.600, dateCreation : new Date("01/14/2011"),
                      categorie : {idCat : 1, nomCat : "PC"} },
                  
                    ];
    
  }

  listeSport(): Observable<Sport[]>{
    return this.http.get<Sport[]>(this.apiURL);
    }

    ajouterSport( prod: Sport):Observable<Sport>{
      return this.http.post<Sport>(this.apiURL, prod, httpOptions);
      }

      supprimerSport(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterSport(id: number): Observable<Sport> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Sport>(url);
          }

          trierSports(){
            this.sports = this.sports.sort((n1,n2) => {
              if (n1.idSport > n2.idSport) {
                  return 1;
              }
             if (n1.idSport < n2.idSport) {
                  return -1;
              }
            return 0;
          });
          }
      

          updateSport(prod :Sport) : Observable<Sport>
            {
                return this.http.put<Sport>(this.apiURL, prod, httpOptions);
            }

         
         
       listeCategories():Observable<CategorieWrapper>{
            return this.http.get<CategorieWrapper>(this.apiURLCat);
            }     

  rechercherParCategorie(idCat: number): Observable<Sport[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Sport[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Sport[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Sport[]>(url);
    }

    ajouterCategorie( cat: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
      }
      
      supprimerCategorie(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
 
}
