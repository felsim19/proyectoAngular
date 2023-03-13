import { Component, OnInit } from '@angular/core';
import { modelCrearProducto } from 'src/app/models/modelCrearProducto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

    listProducto: modelCrearProducto [] = []

    constructor(private _ProductosService : ProductosService){}

    ngOnInit(): void {
        this.obtenerAccesorios()
    }

    obtenerAccesorios() {
        this._ProductosService.getAccesorios().subscribe(data => {
            console.log(data)
            this.listProducto = data
        }, error =>{
            console.log(error)
        })
    }

}
