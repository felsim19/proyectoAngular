export class modelcontacto{
    _id?:string
    Nombres:string
    Apellidos:string
    Correo:string
    Ciudad:string
    Telefono:string
    Mensaje:string

    constructor(Nombres:string, Apellidos:string, Correo:string, Ciudad:string, Telefono:string, Mensaje:string ){
        this.Nombres = Nombres
        this.Apellidos = Apellidos
        this.Correo = Correo
        this.Ciudad = Ciudad
        this.Telefono = Telefono
        this.Mensaje = Mensaje
    }

}

