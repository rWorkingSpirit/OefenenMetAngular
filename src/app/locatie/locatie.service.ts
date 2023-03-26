import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

    // nodig voor de http request
    constructor(private http: HttpClient) {}

    // Haalt de locaties vannuit de database
    public GetLocaties() : Observable<any>
    {
        const url = "http://localhost:8082/locatie/geefAlleLocaties";
        return this.http.get<any>(url);
    }
}