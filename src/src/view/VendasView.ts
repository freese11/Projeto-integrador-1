const prompt = require("prompt-sync")
import promptSync from "prompt-sync";
import { VendasService } from "../service/VendasService";




export class VendasView {
    private vendas: VendasService
    private prompt: promptSync


    constructor() {
        this.vendas = new VendasService
        this.prompt = promptSync();
    }




    public async esxibirMenuVendas(): Promise<void> {
        console.log("FreeseSalesSystem")
        console.log("  Menu de Vendas")
        console.log("")
        console.log("1 - Mostrar vendas")
        console.log("2 - Cadastrar vendas")
        console.log("3 - Mostrar usuario com a venda mais cara")
        console.log("4 - Buscar vendas")
        console.log("5 - Deletar vendas")
        console.log("6 - sair")

        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.vendas.listarVendas())
                this.esxibirMenuVendas()
                break;
            case "2":
                console.log("cadastrando...")

                console.log("insira as informaçoes abaixo da venda:")
                let codV = this.prompt("digite o codigo da venda :")
                let codP = this.prompt("digite o codigo do Produto: ")
                let dataa = this.prompt("digite a data(yyyy-mm-dd):")
                let quantidad = this.prompt("digite a quantidade :")
                let valor = this.prompt("digite o valor total :")
                let codU = this.prompt("digite o codigo do usuario: ")
                let stats = this.prompt("digite o status da venda:")
                let codC = this.prompt("digite o codigo do cliente :")
                await this.vendas.inserirVenda(codV, codP, dataa, quantidad, valor, codU, stats, codC)
                console.log("vendas adicionado com sucesso")
                this.esxibirMenuVendas()
            case "3":
                console.table(await this.vendas.UsuarioVenda())
                this.esxibirMenuVendas()
            case "4":
                let BuscarVenda = this.prompt("digite o codigo que voce quer pesquisar  :")
                await this.vendas.BuscarVenda(BuscarVenda)
                this.esxibirMenuVendas()
                break;
            case "5":
                let deletarvenda = this.prompt("Digite o cod da venda que voce quer deletar")
                await this.vendas.deletarVenda(deletarvenda)
                this.esxibirMenuVendas()
                break;
            case "6":
                console.log("voce saiu ")
                break;
            default:
                console.log("digite de 1 a 4")
                this.esxibirMenuVendas()
        }
    }

}