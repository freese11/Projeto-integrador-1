
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

    public async esxibirMenuUsuario(): Promise<void> {
        console.log("FreeseSalesSystem")
        console.log("  Menu de Usuarios")
        console.log("")
        console.log("1 - Mostrar Usuarios")
        console.log("2 - Cadastrar Usuarios")
        console.log("3 - Deletar Usuarios")
        console.log("4 - Atualizar Usuarios")
        console.log("5 - Sair")


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.Usuario.listarUsuarios1())
                this.esxibirMenuUsuario()
                break;
            case "2":
                console.log("insira as informaçoes abaixo do usuario:")
                let nome = this.prompt("digite o nome :")
                let email = this.prompt("digite o email: ")
                let numero = this.prompt("digite o numero:")
                let cpf = this.prompt("digite o cpf :")
                let senha = this.prompt("digite a sua senha : ")
                await this.Usuario.inserirUsuario(nome, cpf, email, numero, senha)
                this.esxibirMenuUsuario()
                break;
            case "3":
                let deleteUsuario = this.prompt("digite o cpf do usuario que voce deseja deletar")
                await this.Usuario.deletarUsuario(deleteUsuario)

                this.esxibirMenuUsuario()
                break;

            case "4":
                let atualizacliente = this.prompt("Qual o cpf do usuario que voce deseja mudar: ")
                let cliente1 = this.prompt("Digite a nova senha do usuario: ")
                await this.Usuario.Mudarsenha(atualizacliente, cliente1)
                console.table(await this.Usuario.listarUsuarios1())
                this.esxibirMenuUsuario()
                break;
            case "5":
                console.log("voce saiu do menu dos usuarios")
                break;
            default:
                console.log("digite de 1 a 4")
                this.esxibirMenuUsuario()

        }
    }





}