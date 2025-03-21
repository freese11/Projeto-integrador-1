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


    public async esxibirMenu(): Promise<void> {
        console.log("FreeseSalesSystem")
        console.log("")
        console.log("1 - Mostrar produtos")
        console.log("2 - Cadastrar produto")
        console.log("3 - buscar  produto")
        console.log("4 - deletar produto")
        console.log("5 - buscar por marca ")
        console.log("6 - atualizar valor")
        console.log("7 - sair")

        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.log("lista abaixo")
                console.table(await this.produtos.listarProdutos())
                this.esxibirMenu()
                break;
            case "2":
                console.log("insira as informaçoes abaixo:")
                let cod = this.prompt("digite o cod do numero:")
                let marca = this.prompt("digite a marca do produto:")
                let valor = this.prompt("digite o valor:")
                let estoque = this.prompt("digite o numero de estoque:")
                let tipo = this.prompt("digite o tipo do produto:")
                let cor = this.prompt("digite a cor: ")
                let nome = this.prompt("digite o nome:")
                let ativoInativo = this.prompt("digite se ele esta ativo ou inativo:")
                let tamanho = this.prompt("digite o tamanho")
                await this.produtos.inserirProduto(cod, marca, valor, estoque, tipo, cor, nome, ativoInativo, tamanho)
                console.log("produtos adicionado com sucesso")
                this.esxibirMenu()
                break;
            case "3":
                let Buscarcod = this.prompt("digite o codigo que voce quer pesquisar  :")
                console.log("produto pesquisado abaixo")
                console.table(await this.produtos.BuscarPorCod(Buscarcod))
                this.esxibirMenu()
            case "4":
                let deleteproduto = this.prompt("digite' o cod do produto que voce deseja deletar :")
                console.table(await this.produtos.deletarProduto(deleteproduto))
                console.log("deletado com succeso")
                console.log("")
                console.log("lista atualizada  abaixo")
                console.table(await this.produtos.listarProdutos())
                this.esxibirMenu()
            case "5":
                let marcas = this.prompt("digite a marca que voce quer procurar :")
                console.log("produtos e marcas  pesquisadas abaixo")
                console.table(await this.produtos.BuscarPorMarca(marcas))
                this.esxibirMenu()
            case "6":
                let atualizarValor = this.prompt("Qual o codigo do produto que voce deseja mudar: ")
                let novovalor = this.prompt("Digite o novo valor do produto: ")
                await this.produtos.atualizarValor(atualizarValor ,novovalor )
               
                console.log("produto atualizado abaixo")
                console.table(await this.produtos.BuscarPorCod(atualizarValor))
         
                this.esxibirMenu()


            case "7":
                console.log("voce saiu")
        }
    }
}