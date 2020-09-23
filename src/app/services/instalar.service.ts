import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';
//const
import {api_url} from './../const/api';

@Injectable({
  providedIn: 'root'
})
export class InstalarService {

  constructor(
    private httpClient: HttpClient,
    private authService:AuthService
  ) { }

  crearInstalacion(servicioInstalado):Observable<any>{
    const token:string= this.authService.get_token();
    const url= api_url+ '/api/servicio-instalado/';
    const headers = new HttpHeaders({
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*'
         });
        return this.httpClient.post<any>(url,servicioInstalado,{ headers })
  }
}
