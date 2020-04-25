import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent implements OnInit {

  show: boolean;

  constructor(private service: ProductDataService) {
    this.show = false;
  }

  ngOnInit() {
  }

  public postProduct(data) {
    this.service.postProduct(data).subscribe(
      response => {
        this.show = true;
      }
    )
  }

}
