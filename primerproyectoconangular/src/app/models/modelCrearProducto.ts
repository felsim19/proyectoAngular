export class modelCrearProducto{
    _id?:string
    Nombre:string
    Descripcion:string
    RutaImg:string
    Precio:number
    Categoria:string

    constructor(Nombre:string, Descripcion:string, RutaImg:string, Precio:number, Categoria:string){
        this.Nombre = Nombre
        this.Descripcion = Descripcion
        this.RutaImg = RutaImg
        this.Precio = Precio
        this.Categoria = Categoria
    }
}


