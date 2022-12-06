import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacionPComponent } from './components/informacion-p/informacion-p.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionPComponent,
    ExperienciasComponent,
    EducacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
