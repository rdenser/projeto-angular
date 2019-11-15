import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService,
              private pageDataService: PageDataService) { }

  ngOnInit() {
    this.listarElmais();
    this.pageDataService.atualizaTitulo('Caixa de entrada');
  }

  listarElmais() {
    this.emailService
      .listar()
      .subscribe(
        (listaEmailApi) => {
          this.listaDeEmails = listaEmailApi;
        }
      )
  }

  private _novoEmail = false;
  email = new Email();
  listaDeEmails: Email[] = [];

  get novoEmail() {
    return this._novoEmail;
  }

  abreForm() {
    this._novoEmail = !this.novoEmail;
  }

  submitForm(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return
    }

    this.emailService.enviar(this.email).subscribe(
      () => {
        this.listarElmais();
        this.listaDeEmails.push(this.email);
        this.email = new Email();
        formEmail.reset();
        this.abreForm();
      },
      (erro) => {
        console.log(erro);

      }
    );
  }

  removerEmail(emailId: string) {
    if (confirm('Tem certeza que deseja apagar este e-mail?')) {
      this.emailService
        .deletar(emailId)
        .subscribe(
          () => {
            this.listarElmais()
          }
        )
    }
  }

}
