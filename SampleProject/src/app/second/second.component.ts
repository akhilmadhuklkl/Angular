import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  data = true;

  select1='';
  select2='';
  select3='';

  a = 5;
  b = 21;

  person=[
    {name:'test1',age:10,email:'test1@gmail.com'},
    {name:'test1',age:12,email:'test2@gmail.com'},
    {name:'test1',age:14,email:'test3@gmail.com'},
  ]

  hideData=true;

  hideList()
  {
    this.hideData = false;
  }

  s = 2

  day = new Date().getDay()

  tsstyle1="style3"
  tsstyle2="style4"

  newstyle='green'
  
  constructor() { }

  ngOnInit(): void {
  }

}
