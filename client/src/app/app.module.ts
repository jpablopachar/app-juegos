import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormJuegosComponent } from './components/form-juegos/form-juegos.component';
import { ListarJuegosComponent } from './components/listar-juegos/listar-juegos.component';

import { JuegosService } from './services/juegos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormJuegosComponent,
    ListarJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
