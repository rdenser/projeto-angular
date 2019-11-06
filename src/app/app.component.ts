import { Component } from '@angular/core';
import { Email } from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  email = new Email();

  private _novoEmail = false;

  get novoEmail(){
    return this._novoEmail;
  }

  abreForm (){
    this._novoEmail = !this.novoEmail;
  }

  submitForm(eventoSubmit: Event){
    eventoSubmit.preventDefault();
    console.log(this.email);
  }
}
