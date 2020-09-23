import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';
//const
import {api_url} from './../const/api';

@Injectable({
  providedIn: 'root'
})
export class InstalacionService {
  instalacion: any[] = [];

  constructor(
    private   http: HttpClient,
    private authService:AuthService  

    ) { }
  
  getInstalacion(){
  const token:string= this.authService.get_token();
  const url = api_url+`/api/instalacion/`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer '+token,
    'Access-Control-Allow-Origin': '*'
  }); 
  return this.http.get(url, { headers });
  }
  getInstalacionById(idInstalacion:string){
    const token:string= this.authService.get_token();
    const url = api_url+`/api/instalacion/`+ idInstalacion;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    }); 
    return this.http.get(url, { headers });
  }

  crearInstalacion(instalacion):Observable<any>{
    const token:string= this.authService.get_token();
    const url = api_url+ `/api/instalacion/`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>(url, instalacion,{ headers });
  }
  borrarInstalaicion(idInstalacion){
    const token:string= this.authService.get_token();
    const url = api_url+ `/api/instalacion/`+idInstalacion;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.delete<any>(url,{headers})
  }
}
