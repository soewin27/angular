import { Component, OnInit } from '@angular/core'; import { Observable, of, range, from, fromEvent } from 'rxjs'; 
import { ajax } from 'rxjs/ajax'; 
import { filter, map, catchError } from 'rxjs/operators'; 
import { Product } from './service/product';
import { ProductService } from './service/product.service';
@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.scss'] 
}) 
export class AppComponent{ 
    
}