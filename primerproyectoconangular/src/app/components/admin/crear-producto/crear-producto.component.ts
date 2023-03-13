import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { modelCrearProducto } from 'src/app/models/modelCrearProducto';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

    TituloComponents:string = 'Crear'
    FormProducto: FormGroup
    regexTelefono = /^[0-9]+$/;
    id : string | null

    constructor(private fb:FormBuilder, private router: Router ,private _servicioAPIProducto: ProductosService, private idRouter:ActivatedRoute){
        this.FormProducto = this.fb.group({
            Nombre:["", Validators.required],
            Descripcion:["", Validators.required],
            RutaImg:["", Validators.required],
            Precio:["", [Validators.required, Validators.pattern(this.regexTelefono)]],
            Categoria:["", Validators.required]
        })
        this.id = this.idRouter.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    agregarProducto(){
        if (this.id == null) {
            this._servicioAPIProducto.postProducto(this.FormProducto.value).subscribe(data =>{
                    Swal.fire({
                    icon: 'success',
                    title: 'Su producto ha sido creado satisfactoriamente',
                  })
                  this.router.navigate(['/listar-producto'])
            }, error =>{
                console.log(error);
        })
        }else{
            this._servicioAPIProducto.putproducto(this.id, this.FormProducto.value).subscribe(data =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Su producto ha sido actualizado satisfactoriamente',
                })
                this.router.navigate(['/listar-producto'])
            }, error =>{
                console.log(error);
            })
        }
    }

    accionSolicitada( ){
        if(this.id !== null){
            this.TituloComponents = 'Editar'
            this._servicioAPIProducto.getproducto(this.id).subscribe(data =>
                this.FormProducto.setValue({
                    Nombre : data.Nombre,
                    Descripcion : data.Descripcion,
                    RutaImg : data.RutaImg,
                    Precio : data.Precio,
                    Categoria : data.Categoria
                })
            )
        }
    }

}
