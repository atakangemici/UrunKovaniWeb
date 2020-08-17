import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;


  constructor(
    public http: HttpClient,
    public route: Router,
  ) {
    this.url = 'https://localhost:44388';
  }

  async regsiterUser(data:Object) {
    let params = new HttpParams();
    params = params.append('name', data["name"]);
    params = params.append('lastname', data["lastname"]);
    params = params.append('email', data["email"]);
    params = params.append('password', data["password"]); 
    // memberType ve acceptRule eklenecek 
    // db de alanları açılmalı
    const response = await this.http.post(this.url + '/api/user/register', { params: params }).toPromise();

    return response;
  }

}
