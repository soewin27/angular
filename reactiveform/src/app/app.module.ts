import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
//import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class AppModule { }
