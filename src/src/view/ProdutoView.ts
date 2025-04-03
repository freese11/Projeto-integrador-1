const prompt = require("prompt-sync")
import promptSync from "prompt-sync";
import { ProdutosService } from "../service/ProdutoService";





export class ProdutosView {
    private produtos: ProdutosService
    private prompt: promptSync


    constructor() {
        this.produtos = new ProdutosService
        this.prompt = promptSync();
    }


    public async esxibirMenuProduto(): Promise<void> {
        console.log("FreeseSalesSystem")
        console.log("  Menu dos Produtos")
        console.log("")
        console.log("1 - Mostrar produtos")
        console.log("2 - Cadastrar produto")
        console.log("3 - buscar  produto")
        console.log("4 - deletar produto")
        console.log("5 - buscar por marca ")
        console.log("6 - sair")

        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.produtos.listarProdutos())
                this.esxibirMenuProduto()
                break;
            case "2":
                console.log("cadastrando")
                console.log("insira as informaçoes abaixo")
                let cod = this.prompt("digite o cod do Produto:")
                let marca = this.prompt("digite a marca do Produto:")
                let valor = this.prompt("digite o valor do Produto:")
                let estoque = this.prompt("digite a quantidade do estoque:")
                let tipo = this.prompt("digite o tipo do Produto:")
                let cor = this.prompt("digite a cor do Produto:")
                let nome = this.prompt("digite o nome do Produto:")
                let ativoInativo = this.prompt("digite se ele esta ativo ou inativo:")
                let tamanho=this.prompt("digite o tamanho do Produto")
                await this.produtos.inserirProduto(cod, marca, valor, estoque, tipo, cor, nome, ativoInativo,tamanho)
                this.esxibirMenuProduto()
                break;
            case "3":

                let Buscarcod = this.prompt("digite o codigo do produto que voce quer pesquisar  :")
     
                await this.produtos.BuscarPorCod(Buscarcod)
                this.esxibirMenuProduto()
                break;
            case "4":
                let deleteproduto = this.prompt("digite o cod do produto que voce deseja deletar :")
                await this.produtos.deletarProduto(deleteproduto)
          
                this.esxibirMenuProduto()
                break;
            case "5":
              let marcas = this.prompt("digite a marca que voce quer pesquisar :")
              await this.produtos.BuscarPorMarca(marcas)
              this.esxibirMenuProduto()
              break;
              case "6":
                console.log("voce saiu do menu dos produtos")
                break;
                default :
                console.log("digite de 1 a 6")
                this.esxibirMenuProduto()
        }
    }
}

