import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  template: ` 
  <div> 
      <p> DigitCount Pipe </p> 
      <h1>{{ digits | digitcount }}</h1> 
  </div> 
  `, 
  styleUrls: ['./custompipe.component.css'] ,
})
export class CustompipeComponent implements OnInit {

  digits : number = 100; 

  ngOnInit(): void {
  }

}
