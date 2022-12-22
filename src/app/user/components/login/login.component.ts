import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.pattern(/[a-z][0-9]/g)]),
    password : new FormControl("", Validators.required),

  });
  check;
  login() {
    this.http.get('http://localhost:3000/signUp').subscribe(res => {
      console.log(res)
      this.check = res;
    })
    if(this.loginForm.value.email.match(this.check) && this.loginForm.value.password.match(this.check)){
      alert("Yes");
      this.route.navigateByUrl('/shop');
    }else{
      alert('no')
    }
  }
}
