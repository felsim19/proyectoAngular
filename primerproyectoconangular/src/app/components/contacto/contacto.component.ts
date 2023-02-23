import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { modelcontacto } from 'src/app/models/modelContacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {

    formContacto:FormGroup
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexTelefono = /^[0-9]+$/;


    constructor(private fb:FormBuilder, private router: Router ,private _servicioAPIContacto: ContactoService){
        this.formContacto = this.fb.group({
            Nombres:['', Validators.required],
            Apellidos:['', Validators.required],
            Correo:['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            Telefono:['', [Validators.required, Validators.pattern(this.regexTelefono)]],
            Ciudad:['', Validators.required],
            Mensaje:['', Validators.required]
        })
    }

    agregarContacto(){
        console.log(this.formContacto)
        const CONTACTO : modelcontacto = this.formContacto.value

        this._servicioAPIContacto.postContacto(CONTACTO).subscribe(data =>{
            console.log(data)
            this.router.navigate(['/'])
            Swal.fire({
                icon: 'success',
                title: 'Su informacion fue enviado correctamente',
                text: 'Prontamente no estaremos comunicando',
              })

        })
    }
}

