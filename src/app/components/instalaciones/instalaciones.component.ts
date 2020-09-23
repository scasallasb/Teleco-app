import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import {InstalacionService} from '../../services/instalacion.service';
@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {
  instalations: any = [];
  constructor(
    private activateRoute: ActivatedRoute, 
    private instalacionServicio:InstalacionService,
    private route:Router ) { 
    
    }

  ngOnInit() {
    
    this.instalacionServicio.getInstalacion().subscribe(
      (data:[]) => { 
        this.instalations =data;
        console.log(this.instalations);
      },
      (error) => {
          if (error.status==403){
                this.route.navigate(['login'])
          }
        console.error(error);
      }
    );
  }
  crear_usuario(event: Event){
  event.preventDefault();
  this.route.navigate(['usuario/crear/instalacion']);
 
  }
  borrarInstalacion(event:Event, idInstalacion){
      event.preventDefault();
      console.log(idInstalacion);
    this.instalacionServicio.borrarInstalaicion(idInstalacion).subscribe(
        data=>{
            //window.location.reload();
        }
    )  
  }
mostrarDetalleUser(event:Event,id){
    this.route.navigate(['/mapa',id]);
}

  mostrarUbicacion(event:Event,identificationUser, coordenadasX, coordenadasY){  
    this.route.navigate(['/mapa',identificationUser,coordenadasX,coordenadasY]);
  }

  mostrarServiciosInstalacion(event:Event, idInstalacion:string){
      this.route.navigate(['instalacion/detalle/',idInstalacion]);
  }
}
