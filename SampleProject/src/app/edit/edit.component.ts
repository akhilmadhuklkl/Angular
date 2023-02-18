import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emailId:any;
  emailObj = {id:0,name:'',email:'',password:''}
  constructor(public serv:CrudserviceService,public r:Router) { }

  update(data:any)
  {
    console.log(data)
    this.serv.updateService(data).subscribe(
      (res:any)=>{
        if(res['status']==1)
        {
          alert('Updated Successfully!!!')
          this.r.navigate(['viewall'])
        }
      }
    )
  }
  ngOnInit(): void {
    this.emailId = this.serv.emailData
    this.serv.editById(this.emailId).subscribe(
      (res:any)=>{
        // console.log(res['content'])
        this.emailObj.id = res['content']['id']
        this.emailObj.name = res['content']['name']
        this.emailObj.email = res['content']['email']
        this.emailObj.password = res['content']['password']
      }
    )
    
  }

}
