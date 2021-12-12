import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UfserviceService {

  constructor( private http: HttpClient)
  { }

  getUF():Observable<any> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados'); 
  }

}
