import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  newServiceData:any;
  sendService(params:any)
  {
    console.log(params);
    return this.h.get('http://beyont.in/angularapi/registration.php',{params})
  }
  logServiceData(params:any)
  {
    console.log(params);
    return this.h.get('http://beyont.in/angularapi/login.php',{params})
  }
  viewAllData()
  {
    return this.h.get('http://beyont.in/angularapi/getuser.php')
    
  }
  deleteService(params:any)
  {
    // alert(params)
    return this.h.get('http://beyont.in/angularapi/deleteuser.php?id='+params)
  }

  emailData:any;
  editService(params:any)
  {
    alert(params)
    this.emailData=params
    // return this.h.get('http://beyont.in/angularapi/updateuser.php?email='+params)
  }
  editById(params:any)
  {
    // console.log(params)
    return this.h.get('http://beyont.in/angularapi/getuserbyid.php?email='+params)
  }
  updateService(params:any)
  {
    // console.log(params)
    return this.h.get('http://beyont.in/angularapi/updateuser.php',{params})
  }
  constructor(public h:HttpClient) { }
}
