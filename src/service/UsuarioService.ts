import { Usuario } from "../entity/usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";


export class UsuarioService {


  private repo: UsuarioRepository

  constructor() {
    this.repo = new UsuarioRepository()


  }
  async listarUsuarios1(): Promise<Usuario[]> {
    return await this.repo.listarUsuarios1()
  }

  public async inserirUsuario(nome: string, cpf: string, email: string, numero: string,senha:string) {
    if (this.validarEmail(email))
      return await this.repo.inserirUsuario(nome, cpf, email, numero,senha)
  }
  private validarEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  public async deletarUsuario(cpf: string): Promise<Usuario[]> {
    let lista: Usuario[] = [];
    lista = await this.repo.deletarUsuario(cpf)
    return lista
  }

public async retornarUsuario(cpf:string) :Promise<Usuario> {
  let usuario :Usuario
  
  usuario= await this.repo.retornarUsuario(cpf)
  

return usuario
  
  }


}