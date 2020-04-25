import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  show: boolean;

  constructor(private service: ProductDataService, private router: Router) {
    this.show = false;
  }

  ngOnInit() {
  }

  public deleteProduct(data) {
    this.service.deleteProduct(data.productId).subscribe(
      response => {
        this.service.productData = response;
        this.show = true;
      }
    )
  }

}
