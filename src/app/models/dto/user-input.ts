export class UserInputDTO {
    name = "";
    username = "";
    phone = "";
    password = "";
    avatar = "";

    constructor({nome, usuario, telefone, avatar, senha}) {
        this.name = nome;
        this.username = usuario;
        this.phone = telefone;
        this.avatar = avatar;
        this.password = senha;
    }
}