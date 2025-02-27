import { Cliente } from "./cliente"
import { Produtos } from "./produtos"
import { Usuario } from "./usuario"

export class Vendas {
    private codVendas: number
    private codProduto: number
    private dataVenda: Date
    private quantidade: string
    private valorTotal: number
    private codUsuario: string
    private status: string
    private codCliente: number
    
    constructor(codVenda: number, status1: string, valorTotal: number, dataVenda: Date, cliente: number, produtos:number, usuario: string, quantidade: string) {
        this.codVendas = codVenda
        this.dataVenda = dataVenda
        this.status = status1
        this.valorTotal = valorTotal
        this.codCliente = cliente
        this.codProduto = produtos
        this.codUsuario = usuario
        this.quantidade = quantidade
    }
}
