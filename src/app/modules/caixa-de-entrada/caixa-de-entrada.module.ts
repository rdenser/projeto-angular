import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { ListItemComponent } from './list-item.component';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { MarcadorPipe } from './marcador.pipe';



@NgModule({
  declarations: [CaixaDeEntradaComponent, ListItemComponent, MarcadorPipe],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  exports: [CaixaDeEntradaComponent, ListItemComponent],
  providers: [EmailService]
})
export class CaixaDeEntradaModule { }
