import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  formCadastro = new FormGroup({
    nome: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z\u00C0-\u00FF]+')
      ]),
    usuario: new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-z0-9]+')
      ]),
    telefone: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^\d{8,9}$/)
      ]),
    avatar: new FormControl('', [Validators.required]),
    senha: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6)
      ])
  })

  // marcaCamposComoTouched() {
  //   const formControlKeys = Object.keys(this.formCadastro.controls);
  //   formControlKeys.forEach((FormControlName) => {
  //     this.formCadastro.get(FormControlName).markAsTouched({ onlySelf: true });
  //   })
  // }

  constructor(private http: HttpClient){}
  
  handleCadastrarUsuario() {
    if(this.formCadastro.invalid){
      this.formCadastro.markAllAsTouched();
      return;
    }

    console.log(
      this.formCadastro.value
    );

    let formIngles = {
      name: this.formCadastro.get('nome').value,
      username: this.formCadastro.get('usuario').value,
      phone: this.formCadastro.get('telefone').value,
      password: this.formCadastro.get('senha').value,
      avatar: this.formCadastro.get('avatar').value
    }

    this.http.post('http://localhost:3200/users', formIngles).subscribe();

    console.log(formIngles);
    
  }

}
