import { Component } from '@angular/core';
import { evenement } from './evenementen/evenement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'oefen-met-angular';
  geld = 0;

  // array of evenementen, voor de eventTable
  eventTable : evenement[] = [];

  namen : string[] = ["Jan Naj", "Skylar Blue", "Watson Thatparent", "Json Derulo", "Java Island"];
  locatie : string[] = ["Haarlem", "Deventer", "Groningen", "Rotterdam", "Oosterhout"];
  categorie : string[] = ["Lucht", "Aarde", "Water", "Vuur", "Gecombineerd"];
  voorstel : string[] = ["Voor", "Stel", "Dat", "Ik", "Gein"];

  constructor()
  {
    for(let x = 0; x < this.namen.length; x++)
    {
      let e : evenement = new evenement();

      e.organisator = this.namen[x];
      e.locatie = this.locatie[x];
      e.categorie = this.categorie[x];
      e.voorstel = this.voorstel[x];


      this.eventTable.push(e);
    }

  }

  
  GeldVerhogen()
  {
    this.geld += 100;
  }


  FillEventTable()
  {

    let event : evenement = new evenement();
    event.locatie = "Deventer, Straat 25, 1199 OK";
    event.organisator = "Demo Persoon";
    event.categorie = "Demo Cat";
    event.voorstel = "Voorstel doen";

    this.eventTable.push(event);
  }

}
