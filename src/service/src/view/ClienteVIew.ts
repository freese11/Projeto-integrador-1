const prompt = require("prompt-sync")

import promptSync from "prompt-sync";
import { ClienteService } from "../service/ClienteService";




export class ClienteView {
    private cliente: ClienteService
    private prompt: promptSync


    constructor() {
        this.cliente = new ClienteService()
        this.prompt = promptSync();
    }


    public async esxibirMenu(): Promise<void> {
       
        
        console.log("1 - Mostrar clietes")
        console.log("2 - Cadastrar cliente")
        console.log("3 - buscar por id")
        console.log("4 - deletar")
        console.log("5 - sair")


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.cliente.listarClientes())
                this.esxibirMenu()
                break;
            case "2":
                let nome = this.prompt("qual o nome do cliente")
                let id = this.prompt("digite o id do cpf")
                let numero = this.prompt("digite o numero ")
                let email = this.prompt("digite o email do cliente")
                await this.cliente.inserirCliente(id, nome, email, numero)
                console.log("Cliente adicionado com sucesso")
                console.log("")
                this.esxibirMenu()
                break;
            case "3":
                let buscariid = this.prompt("digite o id do cliente que voce quer procurar")
                console.table(await this.cliente.BuscarPorId(buscariid))
                case"4":
                   let deleteCliente=this.prompt("digite o id do cliente que voce deseja deletar")
                   console.table(await this.cliente.deletarCliente(deleteCliente))
                   console.log("deletado com succeso")
                   this.esxibirMenu()
                   case"5":
                   console.log("voce saiu ")
        }
    }
}