import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  productUrl: string = "http://localhost:8081/productApi/products/";
  productData: any;
  userId: number;

  constructor(private _httpClient: HttpClient) { }

  public getAllProduct(): Observable<any> {
    return this._httpClient.get(this.productUrl);
  }

  public getOneProduct(id: number): Observable<any> {
    return this._httpClient.get(this.productUrl + id + "/");
  }

  public deleteProduct(id: number): Observable<any> {
    return this._httpClient.delete(this.productUrl + id + "/");
  }

  public postProduct(product: Product): Observable<any> {
    return this._httpClient.post(this.productUrl, product);
  }

  public putProduct(product: Product, id: number): Observable<any> {
    return this._httpClient.put(this.productUrl + id + "/", product);
  }

  public checkProduct(productId: number): Observable<any> {
    return this._httpClient.get(this.productUrl + productId + "/");
  }

  /*
  checkUser(empId: number): Observable<any> {
    return this._httpClient.get("http://dummy.restapiexample.com/api/v1/employee/" + empId, { responseType: "json" });
  }
  */
}
