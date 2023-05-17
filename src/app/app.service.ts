import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getVisaInfo(country: string): Observable<any> {

    return this.http.get<any>('http://localhost:4000/country/'+country);

  }
}
