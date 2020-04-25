import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-putproduct',
  templateUrl: './putproduct.component.html',
  styleUrls: ['./putproduct.component.css']
})
export class PutproductComponent implements OnInit {

  show: boolean;

  constructor(private service: ProductDataService) {
    this.show = false;
  }

  ngOnInit() {
  }

  public putProduct(data) {
    this.service.putProduct(data, data.productId).subscribe(
      response => {
        this.show = true;
      }
    )
  }

}
