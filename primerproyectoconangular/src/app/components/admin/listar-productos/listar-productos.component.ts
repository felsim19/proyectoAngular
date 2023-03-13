import { Component, OnInit } from '@angular/core';
import { ProductosService } from "src/app/services/productos.service";
import { modelCrearProducto } from "src/app/models/modelCrearProducto";
import Swal  from "sweetalert2";

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent  implements OnInit{

    listProducto: modelCrearProducto [] = []

    constructor(private _ProductosService : ProductosService){ }

    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {
        this._ProductosService.getProductos().subscribe(data => {
            console.log(data)
            this.listProducto = data
        }, error =>{
            console.log(error)
        })
    }

    eliminarProducto(id:any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el producto?',
            text: "esta accion no sera revertible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
          }).then((result) => {
            if (result.isConfirmed) {
                this._ProductosService.deleteProducto(id).subscribe(data => {
                    Swal.fire(
                      'Producto eliminado',
                      'success'
                    )
                    this.obtenerProductos()
                }, error =>{
                    console.log(error)
                })
            }
          })
    }

}
