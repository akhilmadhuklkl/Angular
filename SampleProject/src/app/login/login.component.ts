import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login(data:any)
  {
    console.log(data)
    this.ser.logServiceData(data).subscribe(
      (res:any)=>
      {
        if(res['status']==1)
        {
          alert('Login SUCCESS!!!!')
          this.r.navigate(['viewall'])
        }
        else if(res['status']==3)
        {
          alert('Login DOES NOT EXIST!!!!!')
        }
      }
    )
  }
  constructor(public ser:CrudserviceService,public r:Router) { }

  ngOnInit(): void {
  }

}
