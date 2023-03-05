import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

    formContacto:FormGroup
    id : string | null

    constructor(private fb:FormBuilder, private router: Router , private _servicioAPIContacto: ContactoService, private idRouter:ActivatedRoute){
        this.formContacto = this.fb.group({
            Nombres:['', Validators.required],
            Apellidos:['', Validators.required],
            Correo:['',  Validators.required],
            Telefono:['', Validators.required ],
            Ciudad:['', Validators.required],
            Mensaje:['', Validators.required]
        })
        this.id = this.idRouter.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.accioneditar()
    }

    editarContacto(){
        if (this.id !== null) {
            this._servicioAPIContacto.putContacto(this.id, this.formContacto.value).subscribe(data =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Su producto ha sido actualizado satisfactoriamente',
                })
                this.router.navigate(['/listar-contacto'])
            }, error => {
            console.log(error, this.editarContacto);
            })
        }

    }

    accioneditar(){
        if(this.id !== null){
            this._servicioAPIContacto.getContacto(this.id).subscribe(data =>
                this.formContacto.setValue({
                    Nombres : data.Nombres,
                    Apellidos : data.Apellidos,
                    Correo : data.Correo,
                    Telefono : data.Telefono,
                    Ciudad : data.Ciudad,
                    Mensaje : data.Mensaje
                })
            )
        }
    }

}




