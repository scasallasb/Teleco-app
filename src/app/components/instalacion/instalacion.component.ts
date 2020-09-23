import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//servicios
import {InfoService}  from  './../../services/info.service'
@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.component.html',
  styleUrls: ['./instalacion.component.css']
})
export class InstalacionComponent implements OnInit {

  constructor(
      private router:Router,
      private activateRoute:ActivatedRoute,
      private serviceUser:InfoService,
  ) { }

  ngOnInit() {
      this.activateRoute.params.subscribe(
          params=>{
              console.log(params);
          }
      )
  }

}
