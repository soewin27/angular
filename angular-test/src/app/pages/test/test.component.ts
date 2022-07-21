import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLogIn: boolean = true;
  isLogOut: boolean = false;
  list = [1, 2, 3, 4, 5];
  studentArr: any[] = [{
    "id": 1,
    "name": "student1"
  },
  {
    "id": 2,
    "name": "student2"
  },
  {
    "id": 3, "name": "student3"
  },
  {
    "id": 4,
    "name": "student4"
  }
  ];
  logInName = 'user'; 
  name: string = 'Peter';
  constructor() { }

  ngOnInit(): void {
  }
    presentDate = new Date();

}
