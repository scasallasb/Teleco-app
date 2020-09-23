import { Injectable } from '@angular/core';

@Injectable()
export class serviciosService {

  private servicios: servicios[]=[
    {
    nombre:"plan Sutagao",
    valor: "110.000",
    tecnologia:"Gpon",

  },{
    nombre:"plan Muisca",
    valor: "150.000",
    tecnologia:"Gpon",
  },{
    nombre:"plan Tairona",
    valor: "200.000",
    tecnologia:"Gpon",
  },{
    nombre:"plan Caribe",
    valor: "280.000",
    tecnologia:"Gpon",
  }
];


  constructor() {  }


   getServicios(): servicios[]{
    return this.servicios;
  }

  getServicio(idx:string){
    return this.servicios[idx];
  }

   buscarServicio(termino:string){
    let servicioArr:servicios[]= [];
   termino= termino.toLowerCase();

   for(let servicio of this.servicios){
     let nombre= servicio.nombre.toLowerCase();
     if (nombre.indexOf(termino) > 0 ){
       servicioArr.push(servicio);
      }

    }
    return servicioArr;
   }

 }


export interface servicios{
  nombre:string,
  valor:string,
  tecnologia:string
}
