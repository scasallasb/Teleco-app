import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';


//import { Text, geometry } from '@progress/drawing';
//services
import { InfoService} from '../../services/info.service';
import { InstalacionService} from '../../services/instalacion.service';
import {InstalacionDetailsService} from '../../services/instalacion-details.service';
import {InfraestructuraService} from '../../services/infraestructura.service';

//models 
import { Marcador } from 'src/app/model/Marcador';
//import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']

})
export class FormUsuarioComponent implements OnInit {
    forms: FormGroup;
    formInstalacion:FormGroup;
    formsServiceInstalacion :FormGroup; 
    marcador:Marcador;
    infraestructura:any[]=[];
    serviceInstalacion:any[]=[];
    haveContrato:boolean= false;
    isInstalled:boolean= false;
    isChecked_contract:boolean;
    isCheked_installed:boolean;
    viable:boolean;

    constructor(
    private formBuilder: FormBuilder,
    private infoservice:InfoService,
    private instalacionService:InstalacionService,
    private instalacionDetails:InstalacionDetailsService,
    private infraestructuraService:InfraestructuraService,
    private router:Router) {
    this.marcador = new Marcador(4.33,-74.33);
    this.buildForm();
    this.buscarUbicacion();    
  }

  ngOnInit() {
    this.marcador = new Marcador(4.331374719141121,-74.39548881530762);
    this.infraestructuraService.getInfraestructura().subscribe(
        (newInfraestructura:[])=> {
          this.infraestructura=newInfraestructura;
            this.viable= false;
            newInfraestructura.forEach(
                (element:any)=>{
                  //console.log(element.coordenadasX);
                 if (this.calculardistancia(this.marcador, {lon:element.coordenadasX,lat:element.coordenadasY})<= 0.005) {
                   this.viable=true;
                   console.log(this.viable);
                 }
        })
      } 
    )
    }
    
    
  calculardistancia(marcador1, marcador2){
    //var p1 = new google.maps.LatLng(marcador1.lat, marcador1.lon);
    //var p2 = new google.maps.LatLng(marcador2.lat, marcador2.lon);
    //return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    //console.log("long 1",marcador1.lng);
    //console.log("lat 1",marcador1.lat);
    //console.log("long 1",marcador2.lon);
    //console.log("lat 1", marcador2.lat); 
    //console.log((marcador1.lat-marcador2.lat)*Math.PI/180);
    //console.log((marcador1.lng-marcador2.lon)*Math.PI/180);
    var R = 6372.795477598;
    //marcador1.lat=4.342757;
    //marcador1.lng= -74.357521;
    //marcador2.lat= 4.316285;
    //marcador2.lon= -74.352024;
    //R * arccos (sen (LATA) * sen (LATB) + cos (lata) * cos (LATB) * cos (LonA-LonB))
    var difLatitud= (marcador1.lat-marcador2.lat)*Math.PI/180;
    var difLongitud=(marcador1.lng-marcador2.lon)*Math.PI/180;

    var distancia =R*Math.acos(Math.sin((marcador1.lat*Math.PI)/180)*Math.sin((marcador2.lat*Math.PI)/180)+  Math.cos((marcador1.lat*Math.PI)/180)*Math.cos((marcador2.lat*Math.PI)/180)*Math.cos(difLongitud) )
    //console.log(R*Math.acos(12.03747028736922))
    //console.log(Math.sin((marcador1.lat*Math.PI)/180)*Math.sin((marcador2.lat*Math.PI)/180)+  Math.cos((marcador1.lat*Math.PI)/180)*Math.cos((marcador2.lat*Math.PI)/180)*Math.cos(difLongitud));
    //console.log("distancia",distancia);
    

    var a =Math.sin(difLatitud/2)**2 +Math.cos(marcador1.lat*Math.PI/180)*Math.cos(marcador2.lat*Math.PI/180)+Math.sin(difLongitud/2)**2; 


    //console.log(Math.sqrt((marcador1.lng - marcador2.lon)**2-(marcador1.lat - marcador2.lat)**2));
    return Math.sqrt((marcador1.lng - marcador2.lon)**2-(marcador1.lat - marcador2.lat)**2)
  }
  moveMarcador(event){
  /**
  * mueve el marcador seleccionando coordenadas
  */
  this.marcador= new Marcador(event.coords.lat,event.coords.lng);
  this.forms.value.coordenadasY=event.coords.lng;
  this.viable= false;
  this.infraestructura.forEach(
      (element:any)=>{
        //console.log(element.coordenadasX);
       if (this.calculardistancia(this.marcador, {lon:element.coordenadasX,lat:element.coordenadasY})<= 0.005) {
         this.viable=true;
         console.log(this.calculardistancia(this.marcador, {lon:element.coordenadasX,lat:element.coordenadasY}));
       }
    });
  }
  volver(event){
    this.router.navigate(['instalacion']);
  }
  private buildForm(){
    /**
     * Formulario principal del componente
     */
   
    this.forms= this.formBuilder.group({
        codigoUser:[''],
        nContrato:[''],
        nombreUser: ['', [Validators.required]],
        segundoNombreUser:[''],
        apellidoUser:['',[Validators.required]],
        segundoApellidoUser:[''],
        TipoDocumento:[''],
        identificationUser:['',[Validators.required,Validators.min(5)]],
        telefonoUser:['',[Validators.required,Validators.min(7)]],
        emailUser:['',[Validators.required,Validators.email]],
        direccionUser:['',[Validators.required]],
        coordenadasY:['',[Validators.required]],
        coordenadasX:['',[Validators.required]],
        municipioUser:[''],
        departamentoUser:[''],
        barrioUser:[''],
        estratoUser:[''],
        planUser:[''],
        haveContract:[this.haveContrato],
        isInstalled:[this.isInstalled]
    })

    this.formInstalacion= this.formBuilder.group(
      {fechaInstalacion:['']});

    this.formsServiceInstalacion= this.formBuilder.group({
      cantidad:[''],
      concepto:[''],
      v_unidad:[''],
    });   
  }

   buscarUbicacion(){
    this.marcador.lat= this.forms.value.coordenadasX;
    this.marcador.lng= this.forms.value.coordenadasY;
  }


  calcularMenorDist(){


  }
  
    saveUser(event: Event) {
    /**
     * se guarda usuario con la orden de
     *  instalacion 
     * 
     * parámetros :
     * ------------
     * evento:event  
     */
    event.preventDefault();
    if (this.forms.valid) {
    const usuario = this.forms.value;
    this.infoservice.crearUsuario(usuario).subscribe((newUser) => {
    let instalacion  = this.formInstalacion.value;
    const user= this.forms.value;
    instalacion.usuario= user
    this.instalacionService.crearInstalacion(instalacion).subscribe((newInstalacion)=>

    {
    let servicio_instalacion = this.serviceInstalacion;
    if (servicio_instalacion!=null){
        this.serviceInstalacion.forEach((element,index)=>{
            element.instalacion=newInstalacion ;
            this.instalacionDetails.crearServicioInstalacion(element).subscribe(
                (newInstalacionService)=>{
                    console.log(newInstalacionService);
                    if (index==this.serviceInstalacion.length){
                    console.log('user');
                    this.router.navigate(['instalacion'])
                }
                }
            );

        }
            )
    }
    });});}}

    guardarServicioInstalacion($event){

        let instalacionDetails=this.formsServiceInstalacion.value;
        this.serviceInstalacion.push(this.formsServiceInstalacion.value);
        /** 
        this.instalacionDetails.crearServicioInstalacion(instalacionDetails).subscribe(
            newServiceInstalacion=>{
            console.log(newServiceInstalacion);
            this.serviceInstalacion.push(this.formsServiceInstalacion.value);
        })*/    
    }
    tieneContrato(havecontract:boolean){
        this.haveContrato= havecontract;
    }
  }
