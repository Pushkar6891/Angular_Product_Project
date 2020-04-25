import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetoneproductComponent } from './components/getoneproduct/getoneproduct.component';
import { GetallproductComponent } from './components/getallproduct/getallproduct.component';
import { PostproductComponent } from './components/postproduct/postproduct.component';
import { PutproductComponent } from './components/putproduct/putproduct.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { AboutproductComponent } from './components/aboutproduct/aboutproduct.component';
import { ContactusproductComponent } from './components/contactusproduct/contactusproduct.component';

import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MyAuthGuard } from 'src/app/services/myauthguard';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GetoneproductComponent,
    GetallproductComponent,
    PostproductComponent,
    PutproductComponent,
    DeleteproductComponent,
    AboutproductComponent,
    ContactusproductComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
