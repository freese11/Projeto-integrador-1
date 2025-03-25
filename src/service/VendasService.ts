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


    public async inserirVenda(codVenda: number,  produtos:number, dataVenda: Date , quantidade: string, valorTotal: number,  usuario: string, status1: string, cliente: number) {
        return  await this.repo.inserirVenda(codVenda,produtos, dataVenda, quantidade, valorTotal, usuario,status1,cliente)}
        
        async UsuarioVenda(): Promise<RelatorioVendasPorVendedor[]> {


            return await this.repo.UsuarioVenda()
        }
    
}