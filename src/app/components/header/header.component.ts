import { Component } from '@angular/core';
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
}