import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  constructor(private http:HttpClient) { }
  private _url: string ="http://localhost:9008/api/welcome";

  loadWelcome(): Observable <any[]> {

		return this.http.get<any[]>(`${this._url}`);
    }
}
