import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-getoneproduct',
  templateUrl: './getoneproduct.component.html',
  styleUrls: ['./getoneproduct.component.css']
})
export class GetoneproductComponent implements OnInit {

  id: number;
  pname: string;
  price: number;
  grade: string;
  productData: Product;
  show: boolean;

  constructor(private service: ProductDataService, private router: Router) {
    this.show = false;
  }

  ngOnInit() {
  }

  public getOneProduct(data) {
    this.service.getOneProduct(data.productId).subscribe(
      response => {
        this.service.productData = response;
        this.productData = this.service.productData;
        this.show = true;
      }
    )
  }

}
