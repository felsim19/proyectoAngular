import { Component, OnInit } from '@angular/core';
import { modelCrearProducto } from 'src/app/models/modelCrearProducto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ciclista',
  templateUrl: './ciclista.component.html',
  styleUrls: ['./ciclista.component.css']
})
export class CiclistaComponent implements OnInit {

    listProducto: modelCrearProducto [] = []

    constructor(private _ProductosService : ProductosService){}

    ngOnInit(): void {
        this.obtenerCiclista()
    }

    obtenerCiclista() {
        this._ProductosService.getCiclista().subscribe(data => {
            console.log(data)
            this.listProducto = data
        }, error =>{
            console.log(error)
        })
    }

}
