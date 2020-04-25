import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallproduct',
  templateUrl: './getallproduct.component.html',
  styleUrls: ['./getallproduct.component.css']
})
export class GetallproductComponent implements OnInit {

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

  public getAllProduct(data) {
    this.service.getAllProduct().subscribe(
      response => {
        this.service.productData = response;
        this.productData = this.service.productData;
        this.show = true;
      }
    )
  }

}
