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




public async esxibirMenu(): Promise<void> {
    console.log("FreeseSalesSystem")
    console.log("")
    console.log("1 - Mostrar vendas")
    console.log("2 - Cadastrar produto")
    console.log("3 - Mostrar usuario com mais vendas")
    //console.log("4 - deletar produto")
    //console.log("5 - sair")

    let pergunta = this.prompt("Selecione alguma das opções acima  ")
    switch (pergunta) {
case "1":
    console.log("lista abaixo")
    console.table(await this.vendas.listarVendas())
    this.esxibirMenu()
    break;
case "2":
    console.log("insira as informaçoes abaixo do usuario:")
                let codV=this.prompt("digite o codigo da venda :")
                let codP=this.prompt("digite o codigo do Produto: ")
                let dataa=this.prompt("digite a data:")
                let quantidad=this.prompt("digite a quantidade :")
                let valor=this.prompt("digite o valor total :")
                let codU=this.prompt("digite o codigo do usuario: ")
                let stats=this.prompt("digite o status da venda:")
                let codC=this.prompt("digite o codigo do cliente :")
                await this.vendas.inserirVenda(codV,codP,dataa,quantidad,valor,codU,stats,codC)
                console.log("vendas adicionado com sucesso")
                this.esxibirMenu()
case "3":
    console.log("lista abaixo")
    console.table(await this.vendas.UsuarioVenda())
    this.esxibirMenu()
    }
}

}