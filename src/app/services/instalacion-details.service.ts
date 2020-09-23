import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';
//const
import {api_url} from './../const/api';

@Injectable({
  providedIn: 'root'
})
export class InstalacionDetailsService {

  cliente: any;

  constructor(
    private httpClient: HttpClient,
    private authService:AuthService    
    ) {

   }

    crearServicioInstalacion(servicioInstalacion):Observable<any>{

            const token:string= this.authService.get_token();
            const url = api_url+`/api/instalacion/instalacion-servicio`;
            const headers = new HttpHeaders({
            'Authorization': 'Bearer '+token,
            'Access-Control-Allow-Origin': '*'
             });
            return this.httpClient.post<any>(url,servicioInstalacion,{ headers })
           }           
    
 
    
   

   getServicioInstalaion(){
    const token:string= this.authService.get_token();
    const url = api_url+`/api/instalacion/instalacion-servicio`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
       });
      return this.httpClient.get(url,{headers})
   }
   getServicioInstalaconById(idInstalacionServicio){
    const token:string= this.authService.get_token();
    const url = api_url+`/api/instalacion/instalacion-servicio/` + idInstalacionServicio;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
       });
      return this.httpClient.get(url,{headers})
   }
   getServicioInstalacionByIdInstalacion(idInstalacion:string){
    const token:string= this.authService.get_token();
    const url = api_url+`/api/instalacion/instalacion-servicio/detail/`+ idInstalacion ;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
       });
      return this.httpClient.get(url,{headers})
   }   

   deleteServicioInstalacion(idInstalacionServicio){
    const token:string= this.authService.get_token();
    const url = api_url+`/api/instalacion/instalacion-servicio/` + idInstalacionServicio;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
       });
       return this.httpClient.delete(url,{headers})
   }
}

