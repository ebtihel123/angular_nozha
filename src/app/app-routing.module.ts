import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSportComponent } from './add-sport/add-sport.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './produit.guard';
import { SportsComponent } from './sports/sports.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';



const routes: Routes = [
  {path: "sports", component : SportsComponent},
  {path: "add-sport", component : AddSportComponent, canActivate:[ProduitGuard]},
  {path: "updateSport/:id", component: UpdateSportComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeCategories", component : ListeCategoriesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "sports", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
