import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[cmailFromInput]'
})

export class CmailFormInputDirective{
    constructor(elemento: ElementRef){
        console.log('Bagulhos!', elemento)

        elemento.nativeElement.setAttribute('class', 'mdl-textfield__input');
    }
}