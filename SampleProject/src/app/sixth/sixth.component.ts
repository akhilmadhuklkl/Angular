import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  // ng g service apiservice
  sendData(data:any)
  {
    console.log(data);
    this.m.sendService(data);
  }
  constructor(public m:ApiserviceService) { }

  ngOnInit(): void {
  }

}
