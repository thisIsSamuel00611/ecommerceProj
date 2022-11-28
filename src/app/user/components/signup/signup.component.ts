import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    email : new FormControl(""),
    password : new FormControl(""),
    rtpassword : new FormControl(""),
    phonenumber : new FormControl(""),

  });

  registerSubmitted() {
    alert('Sign up successful!')

  }

}
