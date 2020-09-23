import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {api_url} from './../const/api';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;

constructor(private http: HttpClient) { }

public get_token(){
  if(sessionStorage.getItem('token')!= null){
    var token= sessionStorage.getItem('token');
    return token;
  }
  return null;
}


login(email:string, password:string ) {
  const url =api_url+'/authenticate';

  const headers= new HttpHeaders({
    'content-type': 'application/json'
  })
  return this.http.post<any>(url, {email , password} ,{headers});
}

guardarToken(accessToken: string): void {
  this._token = accessToken;
  sessionStorage.setItem('token', accessToken);
}


  
 j



}
