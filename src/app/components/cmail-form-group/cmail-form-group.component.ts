import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {
  @Input() campo;
  elemento;
  conteudoDaLabel: string;
  constructor(elemento: ElementRef) {
    this.elemento = elemento.nativeElement;
  }

  ngOnInit() {
    const $input = this.elemento.querySelector('input');
    this.conteudoDaLabel = $input.getAttribute('placeholder');
    $input.setAttribute('placeholder', ' ');
  }

}
