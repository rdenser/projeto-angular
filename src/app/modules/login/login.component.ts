import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin = new FormGroup({
    email: new FormControl('', 
    [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [Validators.required])
  })

  mensagemErro = "";

  constructor(private http: HttpClient) { }

  handleLogin(formLogin: NgForm){
    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      return;
    }

    console.log(this.formLogin);
    
    if(this.formLogin.valid)
    this.http
    .post('http://localhost:3200/login', this.formLogin.value)
    .subscribe(
      (resposta: any) => {
        localStorage.setItem('cmail-token', resposta.token)
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError);
        
        this.mensagemErro = responseError.error.message
      }
    );
  }

}
