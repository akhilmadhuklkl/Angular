import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  newServiceData:any;
  sendService(servicedata:any)
  {
    console.log('servicedata ' +servicedata)
    this.newServiceData=servicedata;
  }

  constructor() { }
}
