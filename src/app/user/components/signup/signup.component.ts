import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    firstname : new FormControl("", Validators.required),
    lastname : new FormControl("", Validators.required),
    email : new FormControl("", [Validators.required, Validators.pattern(/[a-z][0-9]/g)]),
    password : new FormControl("", Validators.required),
    rtpassword : new FormControl("", Validators.required),
    phonenumber : new FormControl("", Validators.required),

  });

  registerSubmitted() {
    if(this.signUpForm.valid){
       this.http.post('http://localhost:3000/signUp', this.signUpForm.value).subscribe(res => {
        console.log(res);
        alert('Signup successful!');
        this.router.navigateByUrl('/signin')
       }, err => {
        console.log(err)
        alert('Something went wrong:(')
       })
    }else{
      alert('Check you form for errors!');
    }

  }

}
