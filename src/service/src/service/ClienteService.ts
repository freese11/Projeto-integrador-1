import { error } from "console";
import { Cliente } from "../entity/cliente";
import { ClienteRepository } from "../repository/ClienteRepository";


export class ClienteService {


  private repo: ClienteRepository

  constructor() {
    this.repo = new ClienteRepository()


  }
  async listarClientes(): Promise<Cliente[]> {
    return await this.repo.listarClientes()
  }


  public async inserirCliente(cpf: number, nome: string, email: string, telefone: string) {
    if (this.validarEmail(email))
      return await this.repo.inserirCliente(cpf, nome, email, telefone)
  }
  private validarEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

  }

  public async BuscarPorId(cpf: number): Promise<Cliente[]> {
    let lista: Cliente[] = []

    lista = await this.repo.BuscarPorId(cpf)

    if (lista.length == 0) {
      throw new error("nao achei o id do cliente")
    }
    return lista

  }
  public async deletarCliente(cpf: number): Promise<Cliente[]> {
    let lista: Cliente[] = [];
    lista = await this.repo.deletarCliente(cpf)
    return lista
  }


  public async retornarCliente(cpf:number) :Promise<Cliente> {
    let cliente :Cliente
    
    cliente= await this.repo.retornarCliente(cpf)
    
  
  return cliente
    
    }
}