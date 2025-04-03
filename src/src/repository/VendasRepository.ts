import {  Pool } from "pg";
import { Database } from "./Database";
import { Vendas } from "../entity/vendas";
import { Usuario } from "../entity/usuario";
import { Produtos } from "../entity/produtos";
import { Cliente } from "../entity/cliente";
import { RelatorioVendasPorVendedor } from "../entity/relatorioVendaporVendedor";


export class VendasRepositor {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

 async listarVendas(): Promise<Vendas[]> {

        const query = "SELECT*FROM public.vendas;";
        const result = await this.pool.query(query);

        const listarVendas: Vendas[] = [];

        for (const row of result.rows) {
 
            const vendas = new Vendas(row.codvenda,row.status,row.valortotal,row.datavenda,row.codcliente,row.codproduto,row.codusuario,row.quantidade);
            listarVendas.push(vendas);

        }
        return listarVendas
    }

    public async inserirVenda(codVenda: number,  produtos:number, dataVenda: Date , quantidade: string, valorTotal: number,  usuario: string, status1: string, cliente: number){

        let query = "INSERT INTO public.vendas(codvenda, codproduto, datavenda, quantidade, valortotal, codusuario, status, codcliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);"
        return   await this.pool.query (query, [codVenda,produtos, dataVenda, quantidade, valorTotal, usuario,status1,cliente ]);}
   
    
        async UsuarioVenda(): Promise<RelatorioVendasPorVendedor[]> {

            const query = "SELECT u.nome, SUM(v.valortotal) AS total_vendas FROM vendas v join usuarios u on v.codusuario = u.cpf GROUP BY u.cpf ORDER BY total_vendas DESC LIMIT 1;";
            const result = await this.pool.query(query);
    
            const uservenda: RelatorioVendasPorVendedor[] = [];
    
            for (const row of result.rows) {
                const relatorio = new RelatorioVendasPorVendedor(row.nome,row.total_vendas);
                uservenda.push(relatorio);
            }
           return uservenda
        }

        public async deletarVenda(codvenda: number) {
            const query = 'DELETE FROM public.vendas WHERE codVenda=$1 '
            const result = await this.pool.query(query, [codvenda])
            return result.rows;
        }

        public async BuscarVenda(codvenda: number): Promise<Vendas[]> {
            let query = "SELECT * FROM public.vendas where codvenda=$1"
            let result = await this.pool.query(query, [codvenda])
    
            const listarVendas: Vendas[] = [];
    
            for (const row of result.rows) {
                const vendas = new Vendas(row.codvenda,row.status,row.valortotal,row.datavenda,row.codcliente,row.codproduto,row.codusuario,row.quantidade)
                listarVendas.push(vendas)
    
            }
            return listarVendas
        }
}
