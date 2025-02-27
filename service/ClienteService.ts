import { error } from "console";
import { Cliente } from "../src/entity/cliente";
import { ClienteRepository } from "../src/repository/ClienteRepository";

Cliente

export class ClienteService {


  private repo: ClienteRepository

  constructor() {
    this.repo = new ClienteRepository();


  }
  async listarClientes(): Promise<Cliente[]> {
    return await this.repo.listarClientes()
  }


  public async inserirCliente(id: number, nome: string, email: string, telefone: string) {
    if (this.validarEmail(email))
      return await this.repo.inserirCliente(id, nome, email, telefone)
  }
  private validarEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

  }

  public async BuscarPorId(id: number): Promise<Cliente[]> {
    let lista: Cliente[] = []

    lista = await this.repo.BuscarPorId(id)

    if (lista.length == 0) {
      throw new error("nao achei o id do cliente")
    }
    return lista

  }
  public async deletarCliente(id: number): Promise<Cliente[]> {
    let lista: Cliente[] = [];
    lista = await this.repo.deletarCliente(id)
    return lista
  }


  public async retornarCliente(id:number) :Promise<Cliente> {
    let cliente :Cliente
    
    cliente= await this.repo.retornarCliente(id)
    
  
  return cliente
    
    }
}