import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  loginForm = new FormGroup({
    uname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    passw:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  get un(){
    return this.loginForm.get('uname')
  }
  get ps(){
    return this.loginForm.get('passw')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
