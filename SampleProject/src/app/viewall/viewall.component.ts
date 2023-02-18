import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  users:any;
  deleteUser(data:any)
  {
    // alert(data)
    this.ser.deleteService(data).subscribe(
      (res:any)=>{
        // console.log(res)
        if(res['status']==1)
        {
          alert('Deleted Successfully!!!!!')
          this.ngOnInit()
        }
      }
    )
  }
  editUser(data:any)
  {
    alert(data)
    this.ser.editService(data)
    this.r.navigate(['edit'])
  }
  constructor(public ser:CrudserviceService,public r:Router) { }

  ngOnInit(): void {
    this.ser.viewAllData().subscribe(
      (res:any)=>{
        console.log(res['data'])
        this.users = res['data']
      }
    )
  }

}
