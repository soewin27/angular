import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fruits: string[] = ['Apple', 'Mango', 'Orange', 'Grapes', 'Banana','Pineapple'];

  ngOnInit(): void {
  }

}
