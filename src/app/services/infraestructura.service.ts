import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';
//const
import {api_url} from './../const/api';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {

  constructor(private   http: HttpClient,
              private authService:AuthService ) { }


  infraestructura: any[] = [];

  getInfraestructura() {
    const token:string= this.authService.get_token();
    const url = api_url +`/api/infraestructura/`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });

  return this.http.get(url, { headers })
    }
}
