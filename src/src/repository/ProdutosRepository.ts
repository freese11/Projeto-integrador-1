import { Pool } from "pg";
import { Database } from "./Database";
import { Produtos } from "../entity/produtos";
import { promises } from "dns";



export class ProdutoRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }
    async listarProdutos(): Promise<Produtos[]> {

        const query = "SELECT * FROM public.produtos";
        const result = await this.pool.query(query);

        const listarProdutos: Produtos[] = [];

        for (const row of result.rows) {
            const produtos = new Produtos(row.codproduto, row.marca, row.valor, row.estoque, row.tipo, row.cor, row.nome, row.ativoinativo,row.tamanho);
            listarProdutos.push(produtos);

        }
        return listarProdutos

    }
    public async BuscarPorCod(codproduto: number): Promise<Produtos[]> {
        let query = "SELECT * FROM public.produtos where codproduto=$1"
        let result = await this.pool.query(query, [codproduto])

        const listarProdutos: Produtos[] = [];

        for (const row of result.rows) {
            const produtos = new Produtos(row.codproduto, row.marca, row.valor, row.estoque, row.tipo, row.cor, row.nome, row.ativoinativo,row.tamanho)
            listarProdutos.push(produtos)

        }
        return listarProdutos
    }

    public async inserirProduto(codproduto: number, marca: string, valor: number, estoque: number, tipo: string, cor: string, nome: string, ativoinativo: string,tamanho:string) {

        let query = "INSERT INTO public.produtos(codproduto, marca, valor, estoque, tipo, cor, nome, ativoinativo,tamanho)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);"
        return await this.pool.query(query, [codproduto, marca, valor, estoque, tipo, cor, nome, ativoinativo,tamanho]);
    }

    public async deletarProduto(codproduto: number) {
        const query = 'DELETE FROM public.produtos WHERE codproduto=$1 '
        const result = await this.pool.query(query, [codproduto])
        return result.rows;
    }

   public async retornarProduto(codproduto:number):Promise<Produtos>{
  let query = "SELECT * FROM public.produtos where codproduto=$1"
        let result = await this.pool.query(query, [codproduto])
        let row = result.rows[0]
        const produto = new Produtos(row.codproduto, row.marca, row.valor, row.estoque, row.tipo, row.cor, row.nome, row.ativoinativo,row.tamanho)
        return produto

    }

    public async BuscarPorMarca(marca:string): Promise<Produtos[]> {
        let query = "SELECT * FROM public.produtos where marca = $1"
        let result = await this.pool.query(query, [marca])

        const listarProdutos: Produtos[] = [];

        for (const row of result.rows) {
            const produtos = new Produtos(row.codproduto, row.marca, row.valor, row.estoque, row.tipo, row.cor, row.nome, row.ativoinativo,row.tamanho)
            listarProdutos.push(produtos)

        }
        return listarProdutos
    }

}
