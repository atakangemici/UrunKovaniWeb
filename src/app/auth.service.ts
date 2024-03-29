import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 public userCheck : boolean;
 public user : object;
 public url : string;
  constructor(
    public ngZone: NgZone,
    public http : HttpClient,
    public route : Router
  ) {  
    this.userCheck = false;
  }


  async Login(user){

  

    this.http.post<any>('http://esnafimapi.azurewebsites.net/api/app/login', user.form.value).subscribe(data => {
      this.user = data; 

      if(this.user !=null){
        localStorage.setItem('user', JSON.stringify(this.user));
        this.route.navigateByUrl("/tabs/tab1");
        this.userCheck = true;
      }
        
    })

  
  }
  

  Register(user){
    this.http.post<any>('http://esnafimapi.azurewebsites.net/api/app/add_user', user.form.value).subscribe(data => {
    localStorage.setItem('user', JSON.stringify(data));
    this.route.navigateByUrl("/tabs/tab1");
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  
}
