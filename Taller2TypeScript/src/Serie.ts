export class Serie{


    posicion : number;
    nombre : String;
    canal : String;
    temporadas : number; 
    descripcion : string;
    link: string;
    imagen : string;

    constructor(posicion: number,nombre:String,  canal:String, temporadas:number,descripcion : string, link: string,imagen : string){
        this.posicion = posicion;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.link = link;


    }


}