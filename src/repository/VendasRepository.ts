import {  Pool } from "pg";
import { Database } from "./Database";
import { Vendas } from "../entity/vendas";
import { Usuario } from "../entity/usuario";
import { Produtos } from "../entity/produtos";
import { Cliente } from "../entity/cliente";


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
   
    
}
