import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  uname: any;
  mobile: any;
  age: any;
  gender: any;
  msg: string;
  constructor(private service: UserRegistrationService, private router: Router) { }

  ngOnInit() {
  }

  checkUser(uname) {
    //debugger;
    console.log(uname);
    // For testing use url http://dummy.restapiexample.com/api/v1/employees
    // console.log("=======================================");
    // this.service.checkUser(uname).subscribe(result => console.log(result));
    // console.log("=======================================");

    this.service.checkUser(uname).subscribe(result => {
      if (result.length === 0) {
        console.log("result.length is zero");
      } else if (result.length === undefined) {
        console.log("result.length is undefined");
      } else {
        console.log("result.uname matches with db");
        for (let i = 0; i < result.length; i++) {
          this.uname = result[i].uname;
          this.mobile = result[i].mobile;
          this.age = result[i].age;
          this.gender = result[i].gender;
          this.users.push(new User(result[i].uname, result[i].mobile, result[i].age, result[i].gender));
        }
        console.log(this.users.length);
        sessionStorage.setItem("uname", uname);
        this.router.navigate(["home"]);
      }
    },
    (error) => {
      console.log(error);
    });

  }

}
