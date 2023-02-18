import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {
  receiverData:any;
  constructor(public m:ApiserviceService) { }

  ngOnInit(): void {
    this.receiverData = this.m.newServiceData
    console.log('newcomponent '+this.receiverData)
  }

}
