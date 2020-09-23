import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
//services
import {InstalarService} from '../../services/instalar.service';
import {InstalacionDetailsService } from '../../services/instalacion-details.service';

@Component({
  selector: 'app-instalar',
  templateUrl: './instalar.component.html',
  styleUrls: ['./instalar.component.css']
})
export class InstalarComponent implements OnInit {

   form:FormGroup; 
   servicioInstalado:any;
   instalacionServicio:any;
  constructor(
      private instalacionDetaliService:InstalacionDetailsService,
      private instalarService:InstalarService,
      private formBuild: FormBuilder,
      private activateRouter:ActivatedRoute,

  ) {
      this.buildForm();
   }

  ngOnInit() {
      this.activateRouter.params.subscribe(     
              params=>{
                console.log(params['idServicioInstalacion'])
                  this.instalacionDetaliService.getServicioInstalaconById(params['idServicioInstalacion']).subscribe(
                      newInstalacionService=>
                      this.instalacionServicio= newInstalacionService
                  )}    
      );
  }

  buildForm(){
    this.form= this.formBuild.group(
        {
            Ip:[''],
            MacOnt:[''],
            MacTvBox:[''],
            drop:[''],
            utp:[''],
            cable_av:['']
        }
    )

  }
  saveServicioInstalado(event){
    const servicioInstalado= this.form.value;
    servicioInstalado.instalacionServicio=this.instalacionServicio;
    console.log(servicioInstalado);
    console.log(this.instalacionServicio);
    this.instalarService.crearInstalacion(servicioInstalado).subscribe(
        newServicioInstalado=>console.log(newServicioInstalado)
    );
  }

}
