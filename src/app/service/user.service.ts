import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler} from "@angular/common/http";
import { Observable } from 'rxjs';
import { user } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url= "http://localhost:3000/user";

  getRegistration(){
    return this.http.get(this.url);
  }

  postRegistration(user: user): Observable<user>{
    return this.http.post<user> (this.url, user)
}
}
