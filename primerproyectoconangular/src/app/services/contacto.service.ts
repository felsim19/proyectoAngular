import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelcontacto } from '../models/modelContacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

    url = 'http://localhost:4000/api'

  constructor(private http:HttpClient) {}

  postContacto(dataContacto:modelcontacto): Observable<any>{
    return this.http.post(`${this.url}/crear-contacto`, dataContacto)

  }


}
