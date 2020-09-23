import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import {AuthService} from './../services/auth.service';
//const
import {api_url} from './../const/api';

@Injectable()
export class InfoService {
  constructor(
    private   http: HttpClient,
    private authService:AuthService           
    ) {  }

users: any[] ;
userSearch:any[]=[];
 getQuery() {
    const token:string= this.authService.get_token();
    const url = api_url +`/api/usuario/`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
  return this.http.get(url, { headers })
    }

  crearUsuario(users):Observable<any>{
    const url = api_url+`/api/usuario/`;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>(url, users,{ headers })
  }
  actualizarUsuario(users):Observable<any>{
    const url = api_url+`/api/usuario/identificacion/`+ users.idUser;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.put<any>(url, users,{ headers })

  }
  getUserByNIdentification(idUser: number){
    const url = api_url+`/api/usuario/identificacion/`+ idUser;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<any>(url,{ headers })
  }

  getUserByApellido(apellido:string){
    const url = api_url+`/api/usuario/apellido/`+ apellido;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(url,{ headers })

  }

  getUserByNombre(nombre :string){
    const url = api_url+`/api/usuario/nombre/`+ nombre;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(url,{ headers })
  }

   buscarByNombre(termino:string){
    let userArr:any[]=[];
     this.getUserByNombre(termino).subscribe(
        (users:[])=>{
            this.users=users;
            termino= termino.toLowerCase();
            for(let servicio of this.users){
            let nombre= servicio.nombreUser ;
            userArr.push(servicio);
              if (nombre.indexOf(termino) > 0 ){
                
               }
             }
             return userArr;
            }
    );  
   return userArr;
  }
  
  eliminarUsuario(idUser: number){
    const url = api_url+`/api/usuario/`+ idUser;
    const token:string= this.authService.get_token();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.delete<any>(url,{ headers })
  }
}
