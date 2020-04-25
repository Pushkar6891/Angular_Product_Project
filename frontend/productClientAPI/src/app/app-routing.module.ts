import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutproductComponent } from 'src/app/components/aboutproduct/aboutproduct.component';
import { ContactusproductComponent } from 'src/app/components/contactusproduct/contactusproduct.component';
import { GetoneproductComponent } from 'src/app/components/getoneproduct/getoneproduct.component';
import { GetallproductComponent } from 'src/app/components/getallproduct/getallproduct.component';
import { PostproductComponent } from 'src/app/components/postproduct/postproduct.component';
import { PutproductComponent } from 'src/app/components/putproduct/putproduct.component';
import { DeleteproductComponent } from 'src/app/components/deleteproduct/deleteproduct.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MyAuthGuard } from 'src/app/services/myauthguard';
import { RegisterComponent } from 'src/app/components/register/register.component';

// Empty Array routes which contains some rules
const routes: Routes = [

  { path: "aboutproduct", component: AboutproductComponent },
  { path: "contactusproduct", component: ContactusproductComponent },
  { path: "getoneproduct", component: GetoneproductComponent, canActivate: [MyAuthGuard] },
  { path: "getallproduct", component: GetallproductComponent, canActivate: [MyAuthGuard] },
  { path: "postproduct", component: PostproductComponent, canActivate: [MyAuthGuard] },
  { path: "putproduct", component: PutproductComponent, canActivate: [MyAuthGuard] },
  { path: "deleteproduct", component: DeleteproductComponent, canActivate: [MyAuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [MyAuthGuard] },
  { path: "**", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
