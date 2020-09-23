import { Component, OnInit } from '@angular/core';
import {serviciosService, servicios} from '../../services/servicios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  servicios:servicios[]= [];
  constructor(private _servicesServicios:serviciosService,
               private _router:Router) { }

  ngOnInit() {
    this.servicios= this._servicesServicios.getServicios();
  }
 verServicio(idx:number){
   this._router.navigate(['/servicio', idx])
 }

}
