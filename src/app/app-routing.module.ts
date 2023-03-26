import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './evenementen/evenement.component';
import { EvenementOverzichtComponent } from './pages/evenementoverzicht.component'; // evenementoverzicht.component.ts (Naam van de 'export class ...')
import { PageNotFoundComponent } from './pagenotfound.component';
import { LocatieComponent } from './locatie/locatie.component';

const routes: Routes = [
  {path: 'eventoverzichtlink', component: EvenementOverzichtComponent}, // Zie imports comment.
  {path: 'linkNaarEvenement', component: EvenementComponent},
  {path: 'locatiesOphalen', component: LocatieComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
