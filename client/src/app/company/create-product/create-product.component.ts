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
    let ret:string = this.service.createProduct(this.model);
    if(ret === "-1") {
      alert("No se pudo insertar el producto.");
    } else {

    }
  }
}
