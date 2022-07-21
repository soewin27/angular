import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public humanlist: any = [
    {
      name: 'Mg Mg',
      gender: 'Male',
      age: 35,
      address: 'No(12) Yangon'
    },
    {
      name: 'Mg Aung',
      gender: 'Male',
      age: 35,
      address: 'No(69) Yangon'
    },
    {
      name: 'Mya Mya',
      gender: 'Female',
      age: 36,
      address: 'No(96) Yangon'
    },
    {
      name: 'Mg Kyaw',
      gender: 'Male',
      age: 22,
      address: 'No(88) Magway'
    },
    {
      name: 'Khin Khin',
      gender: 'Female',
      age: 25,
      address: 'No(50) Mandalay'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
