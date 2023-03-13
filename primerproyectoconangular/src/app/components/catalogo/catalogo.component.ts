import { Component, OnInit } from '@angular/core';
import { ProductosService } from "src/app/services/productos.service";
import { modelCrearProducto } from "src/app/models/modelCrearProducto";

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

    listProducto: modelCrearProducto [] = []

    constructor(private _ProductosService : ProductosService){}

    ngOnInit(): void {
        this.obtenerBicicletas()
    }

    obtenerBicicletas() {
        this._ProductosService.getBicicletas().subscribe(data => {
            console.log(data)
            this.listProducto = data
        }, error =>{
            console.log(error)
        })
    }

}
