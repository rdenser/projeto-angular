import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';
import { EmailApi } from '../models/email-api';

@Injectable()

export class EmailService {

  private url = environment.urlApi + '/emails';

  private httpOptions = {
    headers: { 'Authorization': localStorage.getItem('cmail-token') }
  }

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }): Observable<Object> {

    const emailDTO = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http.post(this.url, emailDTO, this.httpOptions)
  }

  listar(): Observable<Email[]> {
    return this.http
      .get<EmailApi[]>(this.url, this.httpOptions)
      .pipe(
        map(
          (listaEmailsApi) => {
            return listaEmailsApi.map((emailIngles) => {
              const emailDTO: Email = {
                destinatario: emailIngles.to,
                assunto: emailIngles.subject,
                conteudo: emailIngles.content,
                id: emailIngles.id,
                dataEnvio: emailIngles.created_at
              }

              return emailDTO;
            })
          }
        )
      )
  }

  deletar(idEmail: string){
    return this.http
      .delete(`${this.url}/${idEmail}`, this.httpOptions)
  }

}
