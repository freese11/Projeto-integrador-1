
const prompt = require("prompt-sync")
import promptSync from "prompt-sync";
import { UsuarioService } from "../service/UsuarioService";


export class UsuarioView {
    private Usuario: UsuarioService
    private prompt: promptSync


    constructor() {
        this.Usuario = new UsuarioService
        this.prompt = promptSync();
    }

    public async esxibirMenu(): Promise<void> {
        console.log("FreeseSalesSystem")
console.log("")
        console.log("1 - Mostrar usuarios")
        console.log("2 - Cadastrar usuarios")
        console.log("3 - deletar usuario")
        console.log("4 - sair")


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.Usuario.listarUsuarios1())
                this.esxibirMenu()
                break;
            case "2":
                console.log("insira as informaçoes abaixo do usuario:")
                let nome=this.prompt("digite o nome :")
                let email=this.prompt("digite o email: ")
                let numero=this.prompt("digite o numero:")
                let cpf=this.prompt("digite o cpf :")
                let senha=this.prompt("digite a sua senha : ")
                await this.Usuario.inserirUsuario(nome,cpf,email,numero,senha)
                console.log("usuario adicionado com sucesso")
                this.esxibirMenu()
                break;
                case"3":
                let deleteUsuario=this.prompt("digite o cpf do usuario que voce deseja deletar")
                console.table(await this.Usuario.deletarUsuario(deleteUsuario))
                console.log("deletado com succeso")
                this.esxibirMenu()
                case"4":
                console.log("voce saiu ")
               
        }
    }





}