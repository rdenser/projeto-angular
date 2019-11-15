import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.services';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin = new FormGroup({
    email: new FormControl('rdenser@cmail.com.br', 
    [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('123', [Validators.required])
  })

  mensagemErro = "";

  constructor(private loginService: LoginService,
              private roteador: Router) { }

  handleLogin(formLogin: NgForm){
        
    this.loginService
    .autenticar(this.formLogin.value)
    .subscribe(
      () => this.roteador.navigate(['inbox']),
      erro => console.log(erro)
    )
  }

}
