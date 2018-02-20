import { Component, OnInit, } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  // DI - Dependency injection
  constructor(private fb: FormBuilder) {
    
   }

   onSubmitLogin(loginForm){
    // console.log(loginForm);
    // Send a request to the server
    // Try to login
    if(loginForm.valid){
      // send http
      console.log("valid")
    }
    else{
      // show errors
      console.log("invalid")
    }
   }

   createForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit() {
    this.createForm();
  }

}
