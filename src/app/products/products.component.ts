import { Product } from './shared/product.model';
import { ProductService } from './shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (products) => {
        // console.log(products);
        this.products = products;
      }
    );
  }

}
