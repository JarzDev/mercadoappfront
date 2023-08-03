import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Productos[] = [];
  total= 0;
  listo = false;
 itemlisto = 0;
  constructor(private router:Router, private productoSrv: ProductosService, private aRoute: ActivatedRoute) {



   
   }

  ngOnInit() {

    this.productoSrv.getAllProducts().subscribe((data: Productos[]) => {
      this.productos = data;
      console.log(this.productos);
      
      for (let i = 0; i < this.productos.length; i++) {
       this.itemlisto = this.productos[i].id;
        this.total += this.productos[i].cantidad * this.productos[i].precio;
        console.log(this.total);
        console.log(this.itemlisto);
      }
         });
  
     }

     deleteProduct(id: string){
      this.productoSrv.deleteProduct(id).subscribe((product) => {
        alert('Producto eliminado');
        window.location.reload();
      });
    }

    listoBtn (){
      if (this.listo == true){
        this.listo = false;
      }else
      this.listo = true;
      
    }

    }



 



