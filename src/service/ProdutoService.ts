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
      throw new error("nao achei o cod do produto")
    }
    return lista

  }

  public async inserirProduto(codproduto: number, marca: string, valor: number, estoque: number, tipo: string, cor: string, nome: string, ativoINativo: string) {
    return await this.repo.inserirProduto(codproduto, marca, valor, estoque, tipo, cor, nome, ativoINativo)
  }


  public async deletarProduto(codproduto: number): Promise<Produtos[]> {
    let lista: Produtos[] = [];
    lista = await this.repo.deletarProduto(codproduto)
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

    if (lista.length == 0) {
      throw new error("nao achei o cod do produto")
    }
    return lista

  }

}