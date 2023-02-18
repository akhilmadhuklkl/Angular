import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  employee = {name:'test1',age:10,dob:'10/08/2022',salary:150000}

  constructor() { }

  ngOnInit(): void {
  }

}
