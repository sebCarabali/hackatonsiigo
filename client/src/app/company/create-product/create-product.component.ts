import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CreateProductService } from './create-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  model : Product;

  constructor(private service: CreateProductService) { }

  ngOnInit() {
    this.model = new Product();
  }

  onSubmit() {
    this.service.createProduct(this.model).subscribe(data => {
      alert('Producto Creado Correctamente');
      this.clearModel();
    }, err => {
      alert('Error Al Crear el producto');
    });
  }

  clearModel() {
    this.model = new Product();
  }
}
