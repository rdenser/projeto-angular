import { Component, Output, EventEmitter } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {
    
    @Output() filter = new EventEmitter<string>();

    titulo = '';

    constructor(pageService: PageDataService) {
        pageService.tituloDaPagina
            .subscribe((tituloNovo) => {
                this.titulo = tituloNovo;
            })
    }

    statusMenu = false;

    mostraMenu() {
        this.statusMenu = !this.statusMenu;
    }

    filtrar(inputBuscar: HTMLInputElement){
        this.filter.emit(inputBuscar.value);
    }
}