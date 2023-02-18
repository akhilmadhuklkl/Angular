import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-formsender',
  templateUrl: './formsender.component.html',
  styleUrls: ['./formsender.component.css']
})
export class FormsenderComponent implements OnInit {
  sendDetails(data:any)
  {
    console.log(data);
    this.m.sendService(data);
    this.r.navigate(['formreceiver'])
  }
  constructor(public m:FormserviceService,public r:Router) { }

  ngOnInit(): void {
  }

}
