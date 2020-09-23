import {  RouterModule, Routes } from '@angular/router';
import {  HomeComponent        } from './components/home/home.component';
import {  ServiciosComponent   } from './components/servicios/servicios.component';
import {  ServicioComponent    } from './components/servicio/servicio.component';
import {InformacionComponent} from './components/informacion/informacion.component';
import {SearchComponent} from './components/search/search.component';
import {FormUsuarioComponent} from './components/form-usuario/form-usuario.component';
import { InstalacionesComponent}  from './components/instalaciones/instalaciones.component';
import {ServicioInstalacionComponent}  from './components/servicio-instalacion/servicio-instalacion.component';
import {LoginComponent}  from './components/login/login.component';
import {MapaComponent} from './components/mapa/mapa.component';
import { MapaCompletoComponent}  from './components/mapa-completo/mapa-completo.component';
import { FormUserUpdateComponent}  from './components/form-user-update/form-user-update.component';
import {InstalarComponent} from './components/instalar/instalar.component';
import {InstalacionComponent} from "./components/instalacion/instalacion.component";

const APP_ROUTES: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'servicios', component:ServiciosComponent},
  { path: 'servicio/:id', component:ServicioComponent},
  { path: 'buscar/:termino', component:SearchComponent},
  { path: 'informacion', component:InformacionComponent},
  { path: 'usuario/crear/instalacion', component:FormUsuarioComponent},
  { path: 'instalacion', component:InstalacionesComponent},
  { path: 'instalacion/:id', component:InstalacionComponent},
  { path: 'instalacion/instalar/:idServicioInstalacion', component:InstalarComponent},
  { path: 'instalacion/detalle/:idInstalacion', component:ServicioInstalacionComponent},
  { path: 'mapa/:identificationUser/:coordenadasX/:coordenadasY', component:MapaComponent},
  { path: 'mapa/:idUser', component:FormUserUpdateComponent},
  { path: 'show_mapa', component: MapaCompletoComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
