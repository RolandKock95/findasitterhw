import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;
  // DI - Dependency injection
  constructor(private fb: FormBuilder) {
    
   }

   onSubmitLogin(registerForm){
    // console.log(loginForm);
    // Send a request to the server
    // Try to login
    if(registerForm.valid){
      // send http
      console.log("valid")
    }
        else{
      // show errors
      console.log("invalid")
    }
   }

   createForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit() {
    this.createForm();
  }
}
