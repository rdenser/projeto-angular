import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  })

  marcaCamposComoTouched(){
    const formControlKeys = Object.keys(this.formCadastro.controls);
    formControlKeys.forEach((FormControlName) => {
      this.formCadastro.get(FormControlName).markAsTouched({ onlySelf: true });
    })
  }
  
  handleInput(){
    console.log(this.formCadastro.get('nome').touched)
    localStorage.setItem('/cadastro[form]', JSON.stringify(this.formCadastro.value))
  }

  handleCadastrarUsuario(){
    this.marcaCamposComoTouched();

    console.log('Form ta válido?', this.formCadastro);
    console.log(this.formCadastro.controls);
  }

}
