import { CaixaDeEntradaComponent } from "./modules/caixa-de-entrada/caixa-de-entrada.component";
import { LoginComponent } from './modules/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

const rotas: Routes = [
    { path: '', component: CaixaDeEntradaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent }
];

export const RoteamentoModule = RouterModule.forRoot(rotas);