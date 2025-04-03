import { Cliente } from "../entity/cliente";
import { Produtos } from "../entity/produtos";
import { RelatorioVendasPorVendedor } from "../entity/relatorioVendaporVendedor";

import { Usuario } from "../entity/usuario";
import { Vendas } from "../entity/vendas";
import { VendasRepositor } from "../repository/VendasRepository";
RelatorioVendasPorVendedor
export class VendasService {


    private repo: VendasRepositor

    constructor() {
        this.repo = new VendasRepositor();
    }
    async listarVendas(): Promise<Vendas[]> {


        return await this.repo.listarVendas()
    }


    public async inserirVenda(codVenda: number, produtos: number, dataVenda: Date, quantidade: string, valorTotal: number, usuario: string, status1: string, cliente: number) {
        return await this.repo.inserirVenda(codVenda, produtos, dataVenda, quantidade, valorTotal, usuario, status1, cliente)
    }

    async UsuarioVenda(): Promise<RelatorioVendasPorVendedor[]> {


        return await this.repo.UsuarioVenda()
    }
    public async deletarVenda(codVenda: number): Promise<Vendas[]> {
        // Validação do código do produto (deve ser um número válido)
        if (!codVenda || isNaN(codVenda)) {
            console.log("O código da venda fornecido não é válido.");
            return []; // Retorna uma lista vazia se o código não for válido
        }
        // Verifica se o produto existe antes de tentar deletá-lo
        let lista: Vendas[] = await this.repo.BuscarVenda(codVenda);

        if (lista.length === 0) {
            console.log("Não encontramos a venda com o código fornecido para deletar.");
            return []; // Retorna uma lista vazia se o produto não for encontrado
        }

    // Deleta o produto
    await this.repo.deletarVenda(codVenda);
    console.log("Venda deletado com sucesso.");

    // Exibe a lista de produtos atualizada após a exclusão
    console.log("Lista de vendas atualizada abaixo:");
    console.table(await this.listarVendas()); // Mostra a lista de produtos atualizada

    return lista; // Retorna a lista de produtos antes da exclusão

    }
    public async BuscarVenda(codVenda: number): Promise<Vendas[]> {

        if (!codVenda || isNaN(codVenda)) {
          console.log("O código da venda deve ser um número válido.");
          return [];
        }
        let lista: Vendas[] = await this.repo.BuscarVenda(codVenda);
    
        if (lista.length === 0) {
          console.log("Não encontramos um produto com o código fornecido.");
        } else {
          console.log("Venda(s) encontrado(s):");
          console.table(lista);
        }
        return lista;
      }



}