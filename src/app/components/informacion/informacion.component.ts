import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {InfoService} from '../../services/info.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  users: any = [];
  constructor(private activateRoute:ActivatedRoute,
        private route:Router,
        private info:InfoService) { }

  ngOnInit() {
    /**
     * se cargan los datos 
     * 
     */
    this.info.getQuery().subscribe(
      (data:[]) => { // Success
        this.users =data;
      },
      (error) => {
        console.error(error);
      }
    );

  }
  mostrarDetalleUser(event:Event,id:string){
    /**
     *  Redirecciona a actualizar a detalle datos
     * ubicación con un usuario.
     */
    this.route.navigate(['/mapa',id]);
}
addInstalacion(event:Event, id:string){
    /**
     * Agregamos instalación a usuario
     */
    this.route.navigate(["/instalacion", id])
}

  mostrarUbicacion(event:Event,identificationUser, coordenadasX, coordenadasY){  
    /**
     *  Redirecciona a visualizar a detalle datos
     * ubicación con un usuario.
     */
    this.route.navigate(['/mapa',identificationUser,coordenadasX,coordenadasY]);
  }

  eliminarUser(event:Event,id){
    /**
     * Eliminar usuario
     */
    this.info.eliminarUsuario(id).subscribe(
       data => this.route.navigate(['/instalacion'])
    )
  }
}
