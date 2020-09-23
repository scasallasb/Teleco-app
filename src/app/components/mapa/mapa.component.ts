import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//services
import {InfoService}  from  './../../services/info.service'
//model 
import { Marcador } from 'src/app/model/Marcador';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
    marcador:Marcador;
    user:any;
    x: number;
    y:number;
    constructor(private activateRoute:ActivatedRoute,
                private infoService:InfoService,
                private route:Router){
    this.marcador= new Marcador (3.11   , -74.54545);
    this.activateRoute.params.subscribe(params=>{    
        this.marcador.lat=parseFloat(params['coordenadasX']);
        this.marcador.lng= parseFloat(params['coordenadasY']);
        infoService.getUserByNIdentification(params.identificationUser).subscribe(
            user_=>{
               this.user= user_;   
               console.log(this.user); 
            } 
        );
    });
    }
  ngOnInit() {
   
  }

  volver(event: Event){
    event.preventDefault();
    this.route.navigate(['instalacion']);
    }

}
