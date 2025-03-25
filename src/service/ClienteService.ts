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

  public async inserirCliente(id: number, nome: string, email: string, telefone: string) {

    if (isNaN(id)) {
      console.log("O ID do cliente deve ser um número.");
    }


    if (!/^[a-zA-Z\s]+$/.test(nome)) {
      console.log("O nome deve conter apenas letras e espaços.");
    }

    if (!this.validarEmail(email)) {
      console.log("O email fornecido é inválido.");
    }

    if (!/^\d{10,11}$/.test(telefone)) {
      console.log("O telefone deve ter entre 10 e 11 dígitos.");
    }

    return await this.repo.inserirCliente(id, nome, email, telefone);
  }

  private validarEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  public async BuscarPorId(id: number): Promise<Cliente[]> {

    if (!id || isNaN(id)) {
      console.log("O ID deve ser um número válido.");
      return [];
    }
    let lista: Cliente[] = await this.repo.BuscarPorId(id);

    if (lista.length === 0) {
      console.log("Não encontramos um cliente com esse ID.");
    } else {
      console.log("Cliente(s) encontrado(s):");
      console.table(lista);
    }
    return lista;
  }
  public async deletarCliente(id: number): Promise<Cliente[]> {
    if (!id || isNaN(id)) {
      console.log("O ID fornecido não é válido.");
      return [];
    }

    let lista: Cliente[] = await this.repo.BuscarPorId(id);

    if (lista.length === 0) {
      console.log("Não encontramos o cliente com o ID fornecido para deletar.");
      return [];
    }

    await this.repo.deletarCliente(id);
    console.log("Cliente deletado com sucesso.");


    console.log("Lista atualizada abaixo:");
    console.table(await this.listarClientes());

    return lista;
  }

  public async retornarCliente(id: number): Promise<Cliente> {
    let cliente: Cliente

    cliente = await this.repo.retornarCliente(id)


    return cliente

  }
}