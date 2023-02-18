import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-formreceiver',
  templateUrl: './formreceiver.component.html',
  styleUrls: ['./formreceiver.component.css']
})
export class FormreceiverComponent implements OnInit {
  formreceiverData:any;
  constructor(public m:FormserviceService) { }

  ngOnInit(): void {
    this.formreceiverData = this.m.newServiceData
    console.log('newcomponent '+this.formreceiverData)
  }
}
