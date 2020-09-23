import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
//services
import { InstalacionService} from '../../services/instalacion.service';
import {InstalacionDetailsService } from '../../services/instalacion-details.service';

@Component({
  selector: 'app-servicio-instalacion',
  templateUrl: './servicio-instalacion.component.html',
  styleUrls: ['./servicio-instalacion.component.css']
})
export class ServicioInstalacionComponent implements OnInit {

   servicio_instalacionx:any; 
   serviceInstalacion:any[]=[];
   instalacion:any;
  forms: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private instalacionService:InstalacionService,
    private instalacionDetailsService:InstalacionDetailsService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) { 
    this.buildFrom();
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          params =>  {
          this.instalacionDetailsService.getServicioInstalacionByIdInstalacion(params['idInstalacion']).subscribe(
              NewServicioInstalacion=>{
                  console.log(NewServicioInstalacion);
                  for(var i = 0; i < Object.keys(NewServicioInstalacion).length;i++){
                    this.serviceInstalacion.push(NewServicioInstalacion[i]);
                  }           
              }
            ); 
        this.instalacionService.getInstalacionById(params['idInstalacion']).subscribe(
            newInstalacion=> this.instalacion=newInstalacion
        )
        }
      );
  }

  private buildFrom (){
    this.forms= this.formBuilder.group(
      {
        cantidad : ['',[Validators.required]],
        concepto: ['',[Validators.required]],
        v_unidad : ['',[Validators.required]]
      }
    );
  }
 
    volver(event){
        this.router.navigate(['instalacion']);
      }
    
    saveServicioInstalacion(event){
        this.serviceInstalacion.forEach((element,i)=>{
            console.log(element);
            this.instalacionDetailsService.crearServicioInstalacion(element).subscribe(
                newInstalaionService=>{
                    if (i===this.serviceInstalacion.length){
                        window.location.reload();
                    }
                }
            )
             } )
    }
   
    instalar(event, idServicioInstalacion){
        this.router.navigate(['instalacion/instalar/',idServicioInstalacion]);
    }

    guardarServicioInstalacion($event){
        if(this.forms.valid ){
            let serviceInstalacion=this.forms.value;
            serviceInstalacion.instalacion= this.instalacion;       
            this.serviceInstalacion.push(serviceInstalacion);
    }}
        
    eliminarServicioInstalacion(id, index){
          this.instalacionDetailsService.deleteServicioInstalacion(id).subscribe(
            instalacionService=>{
               this.serviceInstalacion.splice(index,1);
            });
       
        
    }
}
