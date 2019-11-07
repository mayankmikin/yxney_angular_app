import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { City } from '../model/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http:HttpClient) { }
  private _url: string ="http://localhost:9000/api/showCities";

  loadCities(): Observable<City[]> {

		return this.http.get<City[]>(`${this._url}`);
    }

}
