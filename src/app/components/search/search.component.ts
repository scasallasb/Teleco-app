import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import {serviciosService} from '../../services/servicios.service';
import {InfoService} from '../../services/info.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  servicios:any[]=[];
  clientes:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private _serviciosService:serviciosService,
              private _infoService:InfoService) { }
  ngOnInit() {

    this._infoService.getQuery().subscribe((data:[])=>
      {
        this.clientes= data;})
    
      this.activatedRoute.params.subscribe(params=>{

        this.clientes.forEach(element => {
          console.log('aqui vamos a empezar a buscar')
          if (element.match(params)){
            console.log(element);          }
        });
    this.servicios=this._serviciosService.buscarServicio(params['termino']);
    this.clientes= this._infoService.buscarByNombre(params['termino']);
    console.log(this._infoService.buscarByNombre(params['termino']));
    console.log(this.clientes )
    }); 
  }
}
