import { CanActivate, Router } from '@angular/router';
// This class helps us to validate JWt Tokens
export class MyAuthGuard implements CanActivate {

  // This will not allow to access localhost:4200/home
	/*
	canActivate() {
		console.log("I came here!");
		return false;
	}
	*/
  //constructor(private router: Router) { }
  canActivate() {
   // debugger;
    if (sessionStorage.getItem("uname")) {
      console.log("Valid User");
      return true;
    } else {
      console.log("Invalid User");
      return false;
    }

  }
}

