import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../Services/home-service.service';
import { AuthorizeServiceService } from '../Services/authorize-service.service';
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
  msg;
  constructor( private router: Router, private homeService: HomeServiceService, private authService: AuthorizeServiceService) { }

  ngOnInit(): void {
    // this.authService.msg.subscribe((msg)=>{
    //   this.msg=msg;
    // })
  }
  onLogIn(loginForm: FormGroup){
    const username =loginForm.value.username;
    const password= loginForm.value.password;
    this.authService.logInUser(username,password).subscribe(data=>console.log(data));
    loginForm.reset();
    //console.log(this.authService.logInUser(username,password));
  }
  // onSubmit(){
  //   if(this.loginForm.value.uername && this.loginForm.value.password)
  //   this.homeService.postLoginVerify(this.loginForm.value);
  //   console.log(this.loginForm.value);
  //   this.router.navigate(['/home']);
  // }

}
