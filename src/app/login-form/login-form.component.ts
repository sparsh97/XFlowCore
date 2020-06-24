import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../Services/home-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private router: Router, private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.homeService.postLoginVerify(this.loginForm.value);
    console.log(this.loginForm.value.username);
    this.router.navigate(['/home']);
  }

}
