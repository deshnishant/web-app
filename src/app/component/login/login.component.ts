import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {

  credentials={
    username:'',
    password:''
  }

  constructor(){ }

   ngOnInit(): void {}

   onSubmit() {
    // console.log("Form is submitted");
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("We have to submit the form to server");
    }

    else {
      ("We have to provide the values");
    }
   }

}

