import { error } from "console";

import { Produtos } from "../entity/produtos";
import { ProdutoRepository } from "../repository/ProdutosRepository";



export class ProdutosService {


  private repo: ProdutoRepository

  constructor() {
    this.repo = new ProdutoRepository();


  }
  async listarProdutos(): Promise<Produtos[]> {
    return await this.repo.listarProdutos()
  }

  public async BuscarPorCod(codproduto: number): Promise<Produtos[]> {
console.log("entrei no buscarPorCod")
    if (!codproduto || isNaN(codproduto)) {
      console.log("O código do produto deve ser um número válido.");
      return [];
    }
    let lista: Produtos[] = await this.repo.BuscarPorCod(codproduto);

    if (lista.length === 0) {
      console.log("Não encontramos um produto com o código fornecido.");
    } else {
      console.log("Produto(s) encontrado(s):");
      console.table(lista);
    }
    return lista;
  }

  public async inserirProduto(codproduto: number, marca: string, valor: number, estoque: number, tipo: string, cor: string, nome: string, ativoinativo: string, tamanho: string) {
    if (isNaN(codproduto)) {
      console.log("O código do produto deve ser um número.");
    }


    if (!/^[a-zA-Z\s]+$/.test(marca)) {
      console.log("A marca deve conter apenas letras e espaços.");
    }


    if (isNaN(valor) || valor <= 0) {
      console.log("O valor deve ser um número positivo.");
    }


    if (isNaN(estoque) || estoque < 0) {
      console.log("O estoque deve ser um número inteiro não negativo.");
    }


    if (!/^[a-zA-Z\s]+$/.test(tipo)) {
      console.log("O tipo deve conter apenas letras e espaços.");
    }


    if (!/^[a-zA-Z\s]+$/.test(cor)) {
      console.log("A cor deve conter apenas letras e espaços.");
    }


    if (!/^[a-zA-Z\s]+$/.test(nome)) {
      console.log("O nome do produto deve conter apenas letras e espaços.");
    }


    if (ativoinativo !== "ativo" && ativoinativo !== "inativo") {
      console.log("O status deve ser 'ativo' ou 'inativo'.");
    }


    if (!/^[a-zA-Z0-9\s]+$/.test(tamanho)) {
      console.log("O tamanho deve conter apenas letras, números e espaços.");
    }
    else {
      console.log("adicionado com sucesso")
      return await this.repo.inserirProduto(codproduto, marca, valor, estoque, tipo, cor, nome, ativoinativo, tamanho)
    }

  }

  public async deletarProduto(codproduto: number): Promise<Produtos[]> {
    // Validação do código do produto (deve ser um número válido)
    if (!codproduto || isNaN(codproduto)) {
      console.log("O código do produto fornecido não é válido.");
      return []; // Retorna uma lista vazia se o código não for válido
    }

    // Verifica se o produto existe antes de tentar deletá-lo
    let lista: Produtos[] = await this.repo.BuscarPorCod(codproduto);

    if (lista.length === 0) {
      console.log("Não encontramos um produto com o código fornecido para deletar.");
      return []; // Retorna uma lista vazia se o produto não for encontrado
    }

    // Deleta o produto
    await this.repo.deletarProduto(codproduto);
    console.log("Produto deletado com sucesso.");

    // Exibe a lista de produtos atualizada após a exclusão
    console.log("Lista de produtos atualizada abaixo:");
    console.table(await this.listarProdutos()); // Mostra a lista de produtos atualizada

    return lista; // Retorna a lista de produtos antes da exclusão
  }



  public async BuscarPorMarca(marca: string): Promise<Produtos[]> {
    // Validação para garantir que a marca não esteja vazia
    if (!marca || marca.trim().length === 0) {
      console.log("A marca não pode estar vazia.");
      return [];  // Retorna uma lista vazia se a marca não for válida
    }

    // Realiza a busca no repositório
    let lista: Produtos[] = await this.repo.BuscarPorMarca(marca);

    // Verifica se a lista está vazia e exibe a mensagem
    if (lista.length === 0) {
      console.log("Não encontramos produtos para a marca fornecida.");
    } else {
      console.log("Produtos e marcas pesquisadas abaixo:");
      console.table(lista);
    }

    return lista;
  }


}