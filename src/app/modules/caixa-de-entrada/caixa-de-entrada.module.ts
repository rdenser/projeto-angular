import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { ListItemComponent } from './list-item.component';



@NgModule({
  declarations: [CaixaDeEntradaComponent, ListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CaixaDeEntradaRoutingModule
  ],
  exports: [CaixaDeEntradaComponent, ListItemComponent]
})
export class CaixaDeEntradaModule { }
