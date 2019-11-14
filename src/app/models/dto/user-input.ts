export class UserInputDTO {
    name = "";
    username = "";
    phone = "";
    password = "";
    avatar = "";
    email = "";

    constructor({nome, usuario, telefone, avatar, senha, email}) {
        this.name = nome;
        this.username = usuario;
        this.phone = telefone;
        this.password = senha;
        this.avatar = avatar;
        this.email = email;
    }
}