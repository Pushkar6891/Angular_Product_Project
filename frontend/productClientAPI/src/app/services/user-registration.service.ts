import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  userUrl: string = "http://localhost:8081/productApi/users/";
  userData: any;
  userId: number;

  constructor(private _httpClient: HttpClient) { }

  public getAllUser(): Observable<any> {
    return this._httpClient.get(this.userUrl);
  }

  public getOneUser(id: number): Observable<any> {
    return this._httpClient.get(this.userUrl + id + "/");
  }

  public deleteUser(id: number): Observable<any> {
    return this._httpClient.delete(this.userUrl + id + "/");
  }

  public postUser(user: User): Observable<any> {
    return this._httpClient.post(this.userUrl, user);
  }

  public putUser(user: User, id: number): Observable<any> {
    return this._httpClient.put(this.userUrl + id + "/", user);
  }

  checkUser(uname: string): Observable<any> {
    // debugger;
    console.log("========Start: Inside checkUser(uname) in UserRegistrationService========");
    console.log(this._httpClient.get(this.userUrl + uname + "/", { responseType: "json" }));
    console.log("========End: Inside checkUser(uname) in UserRegistrationService========");
    return this._httpClient.get(this.userUrl + uname + "/", { responseType: "json" });
    // return this._httpClient.get(this.userUrl + "xyz" + "/", { responseType: "json" });
  }

}
