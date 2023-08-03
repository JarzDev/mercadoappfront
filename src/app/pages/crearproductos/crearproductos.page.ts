import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductosService } from '../../services/productos.service';
import { Productos, Products } from '../../interfaces/productos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crearproductos',
  templateUrl: './crearproductos.page.html',
  styleUrls: ['./crearproductos.page.scss'],
})
export class CrearproductosPage {
  idq: any;
  operacion = "Crear"
  productos = this.productoSrv.getAllProducts;
  prod: Products = new Products();
  form: FormGroup;


  constructor(private productoSrv: ProductosService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute) {

    this.productos = this.productoSrv.getAllProducts;
   
    this.form = this.fb.group({
      id: [0],
      producto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      precio: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      cantidad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      fecha: ['', [Validators.minLength(3), Validators.maxLength(20)]],

    })


    this.idq = Number(aRoute.snapshot.paramMap.get('id'));
    if(this.idq == 0){
      this.operacion = "Crear"
    }else{
      this.operacion = "Editar" 
      }
this.getProductById(this.idq)

  }

  getProductById(id: string) {
    this.productoSrv.getProduct(id).subscribe((data:Productos) => {
       this.form.patchValue(data);
       this.form.patchValue({
        id: data.id,
        producto: data.producto,
        precio: data.precio,
        cantidad: data.cantidad,
        fecha: data.fecha,
      })
    });
  }
  





  createProduct() {
  
    this.prod.producto = this.form.value.producto;
    this.prod.precio = this.form.value.precio;
    this.prod.cantidad = this.form.value.cantidad;
    this.prod.fecha = this.form.value.fecha;

    if (this.idq == 0) {
      this.operacion = "Crear"
      if (this.form.valid) {
        alert("Producto creado con exito")
        let data = this.prod
        this.productoSrv.createProduct(data).subscribe((data) => {
      
          this.router.navigate(['/productos']).then(() => {
            window.location.reload();
          });
        })
      }else{
        alert("Faltan datos por llenar")
      }
}else{
  this.operacion = "Editar"
  if(this.form.valid){
    const data : Productos = this.form.value;
    this.productoSrv.updateProduct(this.idq, data).subscribe(() => {
      alert("Producto actualizado con exito")
      
      this.router.navigate(['/productos']).then(() => {
        window.location.reload();
      });
    })
    }else{
      alert("Faltan datos por llenar")
    }
}
  }
}