import { Component, OnInit } from '@angular/core';
import { ProductosService } from "src/app/services/productos.service";
import { modelCrearProducto } from "src/app/models/modelCrearProducto";

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit{

    listProducto: modelCrearProducto [] = []

    constructor(private _ProductosService : ProductosService){}

    ngOnInit(): void {
        this.obtenerRepuestos()
    }

    obtenerRepuestos() {
        this._ProductosService.getRepuestos().subscribe(data => {
            console.log(data)
            this.listProducto = data
        }, error =>{
            console.log(error)
        })
    }

}
