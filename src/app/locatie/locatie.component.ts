import { Component, OnInit } from '@angular/core';
import { LocatieService } from '../locatie/locatie.service';

@Component({
  selector: 'app-locatie', // if you put this tag anywhere in a html file, it will render the html page of this component
  templateUrl: './locatie.component.html', // html file that will show the content.
  styleUrls: ['./locatie.component.css']  // the css file that will style the html page.
})
export class LocatieComponent implements OnInit
{
  // Array die we laten zien in HTML pagina
  locaties = new Array<any>();

  // nodig voor LocatieService aan te kunnen roepen
  constructor(public locatieService: LocatieService){}

  ngOnInit(): void // on window load (on initialize)
  {
    // Roept de GetLocaties method op die returned de get() method
    this.locatieService.GetLocaties().subscribe(response => 
    {
      for(let i = 0; i < response.length; i++)
      {
        // object dat de response informatie opslaat.
        let locatieObj : {name:string, description:string, capacity:string} = 
        {        
          name : response[i].name,
          description : response[i].description,
          capacity : response[i].capacity
        }
        // pushes het object in een Array.
        this.locaties.push(locatieObj);
      }

    });
  }


}
