import { error } from "console";

import { Produtos } from "../entity/produtos";
import { ProdutoRepository } from "../repository/ProdutosRepository";



export class ProdutosService {


  private repo:ProdutoRepository

  constructor() {
    this.repo = new ProdutoRepository();


  }
  async listarProdutos(): Promise<Produtos[]> {
    return await this.repo.listarProdutos()
  }



  public async BuscarPorCod(codproduto: number): Promise<Produtos[]> {
    
    let lista: Produtos[] = []

    lista = await this.repo.BuscarPorCod(codproduto)

    if (lista.length == 0) {
      console.log("nao achei o cod do produto")
    }
    return lista

  }

  public async inserirProduto(codproduto: number, marca: string, valor: number, estoque: number, tipo: string, cor: string, nome: string, ativoinativo: string,tamanho:string) {
    return await this.repo.inserirProduto(codproduto, marca, valor, estoque, tipo, cor, nome, ativoinativo,tamanho)
 
 
 
 
 
 
 
 
  }


  public async deletarProduto(codproduto: number): Promise<Produtos[]> {
    let lista: Produtos[] = [];
    if (lista.length != 0) {
      lista = await this.repo.deletarProduto(codproduto)
      console.log("deletado com succeso")
      console.log("")
      }
  else{
   console.log("nao encontramos")   
  }
    return lista

    
  }

  public async retornarProduto(codproduto: number): Promise<Produtos> {
    let produto: Produtos

    produto = await this.repo.retornarProduto(codproduto)


    return produto

  }

  public async BuscarPorMarca(marca: string): Promise<Produtos[]> {
    let lista: Produtos[] = []
    lista = await this.repo.BuscarPorMarca(marca)

    if (lista.length != 0) {
      console.log("produtos e marcas  pesquisadas abaixo")
      console.table(lista)
      }
  else{
   console.log("nao encontramos")   
  }
    return lista

  }

  public async atualizarValor(valor:number,codproduto:number){
    let lista : Produtos [] = []
    lista = await this.repo.atualizarValor(valor,codproduto)

    
    if (lista.length == 0) {
      console.log("nao achei o cod do produto")
    }
    return lista

    
}

}