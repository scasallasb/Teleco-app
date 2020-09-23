import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule,MatNativeDateModule,MatCardModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AgmCoreModule } from '@agm/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
//Routes
import{APP_ROUTING} from './app.routes';

//services
import {serviciosService} from './services/servicios.service';
import {InstalacionService} from './services/instalacion.service';
import {InfoService} from './services/info.service';
import {AuthService} from './services/auth.service';
import {InstalarService} from './services/instalar.service';
import {InfraestructuraService} from './services/infraestructura.service';

//components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchComponent } from './components/search/search.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { ServicioInstalacionComponent } from './components/servicio-instalacion/servicio-instalacion.component';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaCompletoComponent } from './components/mapa-completo/mapa-completo.component';
import { FormUserUpdateComponent } from './components/form-user-update/form-user-update.component';
import { InstalarComponent } from './components/instalar/instalar.component';
import { FormUpdateInstallComponent } from './components/form-update-install/form-update-install.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InstalacionComponent } from './components/instalacion/instalacion.component';
import { CajaEmpalmeComponent } from './components/caja-empalme/caja-empalme.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServiciosComponent,
    ServicioComponent,
    SearchComponent,
    InformacionComponent,
    FormUsuarioComponent,
    InstalacionesComponent,
    ServicioInstalacionComponent,
    LoginComponent,
    MapaComponent,
    MapaCompletoComponent,
    FormUserUpdateComponent,
    InstalarComponent,
    FormUpdateInstallComponent,
    InstalacionComponent,
    CajaEmpalmeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AgmCoreModule.forRoot({
        apiKey:'AIzaSyCyhmeWNAIlCHPyh8NMVUlUBEPBrUkvgQ4',
      //apiKey: 'AIzaSyClaxI8R75vL43pbjzXE0JogFgfTVULoCc',
      libraries:['geometry']
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [
    serviciosService,
    InfoService,
    InstalacionService,
    AuthService,
    InstalarService,
    InfraestructuraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
