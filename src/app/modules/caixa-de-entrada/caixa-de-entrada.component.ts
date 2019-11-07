import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _novoEmail = false;
  email = new Email();
  listaDeEmails = [];

  get novoEmail(){
    return this._novoEmail;
  }

  abreForm (){
    this._novoEmail = !this.novoEmail;
  }

  submitForm(formEmail: NgForm){

    if(formEmail.invalid){
      formEmail.control.markAllAsTouched();
      return
    }

    this.listaDeEmails.push(this.email)
    console.log(this.listaDeEmails);
    this.email = new Email();
    
    formEmail.reset();
  }

}
