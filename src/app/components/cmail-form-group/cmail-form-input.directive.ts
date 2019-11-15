import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[cmailFromInput]'
})

export class CmailFormInputDirective{
    constructor(elemento: ElementRef){
        elemento.nativeElement.setAttribute('class', 'mdl-textfield__input');
    }
}