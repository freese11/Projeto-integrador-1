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

        console.log("FreeseSalesSystem")
        console.log("")
        console.log("1 - Mostrar clientes")
        console.log("2 - Cadastrar clientes")
        console.log("3 - buscar id  do cliente")
        console.log("4 - deletar cliente")
        console.log("4 - ")


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.cliente.listarClientes())
                this.esxibirMenu()
                break;
            case "2":
                let nome = this.prompt("qual o nome do cliente")
                let id = this.prompt("digite o cpf do cliente")
                let numero = this.prompt("digite o numero ")
                let email = this.prompt("digite o email do cliente")
                await this.cliente.inserirCliente(id, nome, email, numero)
                console.log("Cliente adicionado com sucesso")
                console.log("")
                this.esxibirMenu()
                break;
            case "3":
                let buscariid = this.prompt("digite o id do cliente que voce quer procurar")
                await this.cliente.BuscarPorId(buscariid)
                break;
            case "4":
                let deleteCliente = this.prompt("digite o id do cliente que voce deseja deletar")
                await this.cliente.deletarCliente(deleteCliente)

                this.esxibirMenu()
                break;
            case "5":
                console.log("voce saiu ")
                default :
                console.log("digite de 1 a 5")
                this.esxibirMenu()
                

        }
    }
}