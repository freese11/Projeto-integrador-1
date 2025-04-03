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

    if (isNaN(cpf)) {
      console.log("O CPF do cliente deve ser um número.");
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
    else{console.log("adicionado com sucesso")
      return await this.repo.inserirCliente(cpf, nome, email, telefone);
  }
  }

  private validarEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  private validarCPF(cpf: string): boolean {
    return /^\d{11}$/.test(cpf); // Apenas 11 dígitos numéricos
  }


  public async BuscarPorId(cpf: number): Promise<Cliente[]> {

    if (!cpf || isNaN(cpf)) {
      console.log("O CPF deve ser um número válido.");
      return [];
    }
    let lista: Cliente[] = await this.repo.BuscarPorId(cpf);

    if (lista.length === 0) {
      console.log("Não encontramos um cliente com esse CPF.");
    } else {
      console.log("Cliente(s) encontrado(s):");
      console.table(lista);
    }
    return lista;
  }
  public async deletarCliente(cpf: number): Promise<Cliente[]> {
    if (!cpf || isNaN(cpf)) {
      console.log("O ID fornecido não é válido.");
      return [];
    }

    let lista: Cliente[] = await this.repo.BuscarPorId(cpf);

    if (lista.length === 0) {
      console.log("Não encontramos o cliente com o CPF fornecido para deletar.");
      return [];
    }

    await this.repo.deletarCliente(cpf);
    console.log("Cliente deletado com sucesso.");


    console.log("Lista atualizada abaixo:");
    console.table(await this.listarClientes());

    return lista;
  }

}