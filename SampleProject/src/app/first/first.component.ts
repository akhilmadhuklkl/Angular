import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  //String Interpolation
  msg='Welcome to Angular';
  details()
  {
    return this.msg;
  }

  //Property Binding
  username='testdata1'

  imglink='assets\pexels-photo-3227984.jpg'

  //Event Binding
  display()
  {
    console.log('Clicked')
  }

  maindata = ''
  inputdisp(eventdata:any)
  {
    // console.log(eventdata.data)
    // console.log(eventdata.target.value)
    this.maindata=eventdata.target.value
    console.log(this.maindata)
  }

  //create text box
  //create two button for that, increment and decrement

  //two way data binding
  twoway='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
