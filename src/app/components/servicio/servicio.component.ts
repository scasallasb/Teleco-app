import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {serviciosService} from '../../services/servicios.service';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  servicio:any={};
  constructor(private activateRoute:ActivatedRoute,
              private _serviciosService:serviciosService) {
                this.activateRoute.params.subscribe(params=>{
                this.servicio=this._serviciosService.getServicio(params['id']);}
              )
              }
  ngOnInit() {
  }

}
