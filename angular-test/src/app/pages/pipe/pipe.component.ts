import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template:  ` 
  <div style="text-align:center"> 
      <h3> Currency Pipe</h3> 
      <p>{{ price | currency:'EUR':true}}</p> 
      <p>{{ price | currency:'INR' }}</p> 
  </div> 
  `, 



  styleUrls: ['./pipe.component.css'] 
})
export class PipeComponent implements OnInit {

  price : number = 20000; ngOnInit() {

  } 
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43; 

}
