import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInputDTO } from '../models/dto/user-input';

@Injectable()

export class UserService {

    private url = environment.urlApi + '/users';

    constructor(private http: HttpClient) { }

    cadastrar(dadosUsuario) {

        let userDTO = new UserInputDTO(dadosUsuario);

        return this.http
            .post(this.url, userDTO)
    }
}