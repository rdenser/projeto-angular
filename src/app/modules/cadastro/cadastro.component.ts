import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserInputDTO } from 'src/app/models/dto/user-input';
import { map, catchError } from 'rxjs/operators';

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
    avatar: new FormControl('', Validators.required, this.validaAvatar.bind(this)),
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
  mensagem = "";

  constructor(private http: HttpClient) { }

  validaAvatar(control: FormControl) {
    return this.http
      .head(control.value, { observe: "response" })
      .pipe(
        map((httpResponse) => {
          console.log(httpResponse);
          //se não tiver erros, retornamos null
          return null
        }),
        catchError((erro) => {
          console.log(erro);
          //se tiver erros, retornamos um objeto com detalhes do erro
          return [{
            urlInvalida: true
          }]
        })
      )
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      return;
    }

    console.log(
      this.formCadastro.value
    );

    let userDTO = new UserInputDTO(this.formCadastro.value);

    this.http.post('http://localhost:3200/users', userDTO).subscribe(
      (resposta: any) => {
        console.log(resposta);
        this.mensagem = `${resposta.email} cadastrado com sucesso`;
        this.formCadastro.reset();
      },
      (erro) => {
        console.error(erro);
        console.error('deu ruim');
      }
    );

  }

}
