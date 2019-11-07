import { Component, OnInit } from '@angular/core';
import { CrearProductoService } from './crear-producto.service';
import { Product } from 'src/app/model/product.model';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  model : Product;

  constructor(private service: CrearProductoService) { }

  ngOnInit() {
    this.model = new Product();
  }

  onSubmit() {
    let ret:string = this.service.createProduct(this.model);
    if(ret === "-1") {
      alert("No se pudo insertar el producto.");
    } else {

    }
  }
}
