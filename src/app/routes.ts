import { CaixaDeEntradaComponent } from "./modules/caixa-de-entrada/caixa-de-entrada.component";
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
    { path: '', component: CaixaDeEntradaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent }
];

export const RoteamentoModule = RouterModule.forRoot(rotas);