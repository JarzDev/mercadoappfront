export interface Productos {

    id: any;
    producto: string;
    precio: number;
    cantidad: number;
    fecha: Date;
    
}

export class Products {

    id: number = 0;
    producto: string = '';
    precio: number = 0;
    cantidad: number = 0;
    fecha: Date = new Date();
    

}
