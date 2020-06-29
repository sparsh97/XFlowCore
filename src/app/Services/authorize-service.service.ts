import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthorizeServiceService {

  msg= new Subject();
  path="http://localhost:8080/engine-rest/identity/verify";
  constructor(private http:HttpClient, private route:Router) { }

    // getToken(){
    //   return sessionStorage.getItem(Token.)
    // }
    //  httpOption={
    //   header: new HttpHeaders({'Content-Type':'application/json'})
    // }

    
    public logInUser(username, password){
      var obj={
        username: username,
        password: password
      }
       return this.http.post(this.path,JSON.stringify(obj),this.httpOptions)
      .pipe(
        map((data: any) => {
          console.log(data);
          if(data.authenticated==true){
            alert("The user is authenticated!");
            this.route.navigate(['/home']);
          }
          else{
            alert("The login credentials are wrong. Please try again");
          }
        })
        )
    }
    public httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
    public startProcess(processId){
      // let headers = new Headers({ 'Content-Type': 'application/json' });
      // headers.append('Accept', 'application/json');
      

        var obj={
          // variables: {
          //   // aVariable : {
          //   //     value : "aStringValue",
          //   //     type: "String"
          //   // },
          //   // anotherVariable : {
          //   //   value : true,
          //   //   type: "Boolean"
          //   // }
          // }
        }

        return this.http.post(`http://localhost:8080/engine-rest/process-definition/${processId}/start`,JSON.stringify(obj),this.httpOptions)
        .pipe(map((data:any)=>{
          console.log(data);
        }))

    }
  }

