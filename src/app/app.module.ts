import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CaixaDeEntradaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
