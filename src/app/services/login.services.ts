import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()

export class LoginService{

    private url = environment.urlApi+'/login';

    constructor(private http: HttpClient){}

    autenticar({email,password}){

        const loginDTO = {
            email: email,
            password: password
        }

        return this.http
                .post(this.url, loginDTO)
                .pipe(
                    map((respostaApi: any) => {
                        localStorage.setItem('cmail-token', respostaApi.token)
                    }

                    )
                )
    }
}