import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacionPComponent } from './components/informacion-p/informacion-p.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent} from "./components/footer/footer.component";
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { interceptorProvider } from './service/interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InformacionPComponent,
        ExperienciasComponent,
        EducacionComponent,
        HabilidadesComponent,
        ProyectosComponent,
        FooterComponent,
        LoginComponent,
        NeweducacionComponent,
        EditeducacionComponent,
        HomeComponent,
        NewExperienciaComponent,
        EditExperienciaComponent,
        NewSkillComponent,
        EditSkillComponent,
        
        
        
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule
    ],
})
export class AppModule { }
