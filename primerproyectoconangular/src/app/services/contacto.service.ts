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
    return this.http.post(`${this.url}/crear-contacto`, dataContacto);
  }
  getContactos(): Observable<any>{
    return this.http.get(`${this.url}/obtener-contactos`);
  }
  deleteContacto (id:string):Observable <any>{
    return this.http.delete(`${this.url}/eliminar-contacto/`+id);
  }
  getContacto(id:string):Observable <any>{
    return this.http.get(`${this.url}/obtener-contactos/`+id)
  }
  putContacto(id:string, dataContacto:modelcontacto): Observable<any>{
    return this.http.put(`${this.url}/actualizar-contacto/`+id, dataContacto)
  }
}
