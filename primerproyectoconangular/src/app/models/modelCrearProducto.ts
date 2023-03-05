export class modelCrearProducto{
    _id?:string
    Nombre:string
    Descripcion:string
    RutaImg:string
    Precio:number

    constructor(Nombre:string, Descripcion:string, RutaImg:string, Precio:number){
        this.Nombre = Nombre
        this.Descripcion = Descripcion
        this.RutaImg = RutaImg
        this.Precio = Precio
    }
}


