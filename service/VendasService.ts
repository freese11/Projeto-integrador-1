import { Cliente } from "../src/entity/cliente";
import { Produtos } from "../src/entity/produtos";
import { Usuario } from "../src/entity/usuario";
import { Vendas } from "../src/entity/vendas";
import { VendasRepositor } from "../src/repository/VendasRepository";

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
        

}