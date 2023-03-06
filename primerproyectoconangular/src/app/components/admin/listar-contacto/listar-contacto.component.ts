import { Component, OnInit } from '@angular/core';
import { ContactoService } from "src/app/services/contacto.service";
import { modelcontacto } from "src/app/models/modelContacto";
import Swal  from "sweetalert2";

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit{

    listContacto:modelcontacto[] = []

    constructor(private _ContactoService : ContactoService) {  }

    ngOnInit(): void {
        this.obtenerContactos();
    }

    obtenerContactos() {
        this._ContactoService.getContactos().subscribe(data => {
            console.log(data)
            this.listContacto = data
        }, error => {
            console.log(error)
        })
    }

    eliminarContacto(id:any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el contacto?',
            text: "esta accion no sera revertible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
          }).then((result) => {
            if (result.isConfirmed) {
                this._ContactoService.deleteContacto(id).subscribe(data => {
                    Swal.fire(
                      'Contacto eliminado',
                      'success'
                    )
                    this.obtenerContactos()
                }, error =>{
                    console.log(error)
                })
            }
          })
    }

}
