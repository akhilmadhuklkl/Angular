import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crudsender',
  templateUrl: './crudsender.component.html',
  styleUrls: ['./crudsender.component.css']
})
export class CrudsenderComponent implements OnInit {
  sendInput(data:any)
  {
    console.log(data);
    this.m.sendService(data).subscribe(
      (res:any)=>{
        // console.log(res);//id,status
        if(res['status']==1)
        {
          alert('Registered Successfully.....your ID is'+res['id'])
          this.r.navigate(['login'])
        }
      }
    )
  }
  constructor(public m:CrudserviceService,public r:Router) { }

  ngOnInit(): void {
  }

}
