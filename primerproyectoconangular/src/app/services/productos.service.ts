import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { modelCrearProducto } from "../models/modelCrearProducto";


@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:4000/api'

    constructor(private http: HttpClient) { }

    postProducto(dataProducto: modelCrearProducto): Observable<any> {
        return this.http.post(`${this.url}/crear-producto`, dataProducto);
    }

    getProductos(): Observable<any>{
        return this.http.get(`${this.url}/obtener-productos`);
    }
    deleteProducto (id:string):Observable <any>{
        return this.http.delete(`${this.url}/eliminar-producto/`+id);
    }

    getproducto(id:string):Observable <any>{
        return this.http.get(`${this.url}/obtener-productos/`+id)
    }

    putproducto(id:string, dataproducto:modelCrearProducto): Observable<any>{
        return this.http.put(`${this.url}/actualizar-producto/`+id, dataproducto )
    }

}
