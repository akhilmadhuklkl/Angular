import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  login(data:any)
  {
    console.log(data)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
