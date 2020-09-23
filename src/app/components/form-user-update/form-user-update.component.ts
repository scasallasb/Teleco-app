import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
//services
import {InfoService} from '../../services/info.service';
import { InstalacionService} from '../../services/instalacion.service';
import {InstalacionDetailsService} from '../../services/instalacion-details.service';
//models 
import { Marcador } from 'src/app/model/Marcador';

@Component({
  selector: 'app-form-user-update',
  templateUrl: './form-user-update.component.html',
  styleUrls: ['./form-user-update.component.css']
})
export class FormUserUpdateComponent implements OnInit {
    forms: FormGroup;
    formInstalacion:FormGroup;
    formsServiceInstalacion :FormGroup; 
    marcador: Marcador;
    usuario:any;
    haveContrato:boolean= false;
    isInstalled:boolean= false;
    isChecked_contract:boolean;
    isCheked_installed:boolean;
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private info_user: InfoService,
    private activateRoute:ActivatedRoute,
    private instalacionService:InstalacionService,
    private instalacionDetailsService:InstalacionDetailsService,

  ) { 
     
  }
  ngOnInit() {
    
    this.activateRoute.params.subscribe(params=>{
        console.log(params);
        this.info_user.getUserByNIdentification(params.idUser).subscribe(
            user_=>{
               this.usuario= user_;
               console.log(user_);
               this.buildForm(user_);     
               this.marcador= new Marcador(parseFloat(user_.coordenadasX),parseFloat(user_.coordenadasY)); 
               
            }
        );
    });
    
  }
/** 
  private buildForm(){
   
   
    this.forms= this.formBuilder.group({
        codigoUser:[''],
        nContrato:[''],
        nombreUser: ['', [Validators.required]],
        segundoNombreUser:[''],
        apellidoUser:['',[Validators.required]],
        segundoApellidoUser:[''],
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
    }*/

    volver(event){
        this.router.navigate(['informacion']);
      }

  private buildForm(user:any){
    
    this.haveContrato = user.haveContract;
    this.isInstalled= user.isInstalled;
    this.forms= this.formBuilder.group({
        codigoUser:[user.codigoUser],
        nContrato:[user.nContrato],
        nombreUser: [user.nombreUser , [Validators.required]],
        segundoNombreUser:[user.segundoNombreUser],
        apellidoUser:[user.apellidoUser,[Validators.required]],
        segundoApellidoUser:[user.segundoApellidoUser],
        identificationUser:[parseInt(user.identificationUser),[Validators.required,Validators.min(5)]],
        telefonoUser:[user.telefonoUser,[Validators.required,Validators.min(7)]],
        emailUser:[user.emailUser,[Validators.required,Validators.email]],
        direccionUser:[user.direccionUser,[Validators.required]],
        coordenadasY:[user.coordenadasY,[Validators.required]],
        coordenadasX:[user.coordenadasX,[Validators.required]],
        municipioUser:[user.municipioUser],
        departamentoUser:[user.departamentoUser],
        barrioUser:[user.barrioUser],
        estratoUser:[user.estratoUser],
        planUser:[user.planUser],
        haveContract:[this.haveContrato],
        isInstalled:[this.isInstalled]
    })
        this.formInstalacion= this.formBuilder.group(
      {fechaInstalacion:['']});

    this.formsServiceInstalacion= this.formBuilder.group({
      cantidad:[''],
      concepto:[''],
      v_unitario:[''],
    });
     
  }  
  
 

  updateUser(event: Event) {
    /**
     * 
     * se guarda usuario con la orden de
     *  instalacion 
     * 
     * parámetros : evento 
     */
      event.preventDefault();



      if (this.forms.valid) {
    const usuario = this.forms.value;
    usuario.idUser= this.usuario.idUser;
    console.log(this.forms.value);
    this.info_user.actualizarUsuario(usuario).subscribe((newUser) => {
    //let instalacion  = this.formInstalacion.value;
    
    //const user= this.forms.value;
    //instalacion.usuario= user
    console.log ("actualizado");
    this.router.navigate(['instalacion']);
    //console.log (newUser);

    
    /** 
    this.instalacionService.crearInstalacion(instalacion).subscribe((newInstalacion)=>

    {
      console.log(newInstalacion);

      let servicio_instalacion = this.formsServiceInstalacion.value;
      if (servicio_instalacion!=null){
      servicio_instalacion.instalacion=newInstalacion ;
      console.log(servicio_instalacion);
      this.instalacionDetails.crearServicioInstalacion(servicio_instalacion).subscribe(
          (newInstalacionService)=>{
              console.log(newInstalacionService);
              this.router.navigate(['instalacion'])
          }
      )}
      this.router.navigate(['instalacion']);
    });
    */

   
    });
    }
  
  }

  buscarUbicacion(){
    this.marcador.lat= this.forms.value.coordenadasX;
    this.marcador.lng= this.forms.value.coordenadasY;
  }

  moveMarcador(event){
    /**
    * mueve el marcador seleccionando coordenadas
    */
    this.marcador= new Marcador(event.coords.lat,event.coords.lng);
    this.forms.value.coordenadasY=event.coords.lng;
    }

    
    tieneContrato(havecontract:boolean){
        this.haveContrato= havecontract;
    }
  

}
