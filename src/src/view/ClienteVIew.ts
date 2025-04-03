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


    public async esxibirMenuCliente(): Promise<void> {

        console.log("FreeseSalesSystem")
        console.log("  Menu dos Clientes")
        console.log("")
        console.log("1 - Mostrar clientes")
        console.log("2 - Cadastrar clientes")
        console.log("3 - buscar cpf  do cliente")
        console.log("4 - deletar cliente")
        console.log("5 - sair")


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.cliente.listarClientes())
                this.esxibirMenuCliente()
                break;
            case "2":
                let nome = this.prompt("qual o nome do cliente:")
                let id = this.prompt("digite o cpf do cliente (11 digitos):")
                let numero = this.prompt("digite o numero (11 a 10 digitos):")
                let email = this.prompt("digite o email do cliente:")
                await this.cliente.inserirCliente(id, nome, email, numero)
                this.esxibirMenuCliente()
                break;
            case "3":
                let buscariid = this.prompt("digite o cpf do cliente que voce quer procurar :")
                await this.cliente.BuscarPorId(buscariid)
                this.esxibirMenuCliente()
                break;
            case "4":
                let deleteCliente = this.prompt("digite o cpf do cliente que voce deseja deletar :")
                await this.cliente.deletarCliente(deleteCliente)

                this.esxibirMenuCliente()
                break;
            case "5":
                console.log("voce saiu do menu clientes ")
                break;
                default :
                console.log("digite de 1 a 6")
                this.esxibirMenuCliente()

        }
    }
}