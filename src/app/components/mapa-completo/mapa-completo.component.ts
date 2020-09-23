import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//services
import {InfoService} from '../../services/info.service';
import {InfraestructuraService} from '../../services/infraestructura.service';
//model
import { Marcador } from 'src/app/model/Marcador';

@Component({
  selector: 'app-mapa-completo',
  templateUrl: './mapa-completo.component.html',
  styleUrls: ['./mapa-completo.component.css']
})
export class MapaCompletoComponent implements OnInit {
    usuarios:any=[];
    caja_empalme:any=[];
    marcador:Marcador[]=[];
    isInstalled:boolean;
    haveContract:boolean=true;
    c_empalme:boolean= true;

    iconMap= {
        iconUrl_user_installed:'./../../../assets/icono-maps/beachflag.ico',
        iconUrl_user_pending:'./../../../assets/icono-maps/mm_20_yellow.png',
        iconUrl_cajaEmpalme:'./../../../assets/icono-maps/mm_20_brown.png',
        scaledSize: {
            width: 40,
            height: 60
        }
    }
constructor(private info_user:InfoService,
            private info_caja_empalme:InfraestructuraService,
            private activateRoute:ActivatedRoute,
            private route:Router,
    ) {
    
}

ngOnInit() {

    this.info_user.getQuery().subscribe(
        (data:[])=>{
                this.usuarios= data;
                this.usuarios.forEach(element => { 
                this.marcador.push(new Marcador(element.coordenadasX, element.coordenadasY));
            });
        }    
    );

    this.info_caja_empalme.getInfraestructura().subscribe(
        (data:[])=>{
            this.caja_empalme= data;
            this.caja_empalme.forEach(cajaEmpalme=> {      
                this.marcador.push(new Marcador(cajaEmpalme.coordenadasX, cajaEmpalme.coordenadasY));          
        });
    }
    );    
}

isInstalledSwitch($event){
    this.isInstalled= !this.isInstalled;
}

haveContractSwitch($event){
    this.haveContract=!this.haveContract;
    }
empalmeSwitch($event){
    this.c_empalme=!this.c_empalme;
    }


mostrarDetalleUser(event:Event,id:string){
    this.route.navigate(['/mapa',id]);
}

mostrarUbicacionUser(event:Event,id:string, coordenadasX:string, coordenadasY:string){
    this.route.navigate(['/mapa',id, coordenadasX, coordenadasY]);
}

}
