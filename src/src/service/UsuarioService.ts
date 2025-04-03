import { Usuario } from "../entity/usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService {

  private repo: UsuarioRepository;

  constructor() {
    this.repo = new UsuarioRepository();
  }

  async listarUsuarios1(): Promise<Usuario[]> {
    return await this.repo.listarUsuarios1();
  }

  public async inserirUsuario(nome: string, cpf: string, email: string, numero: string, senha: string) {
    if (!this.validarNome(nome)) {
      console.log("Nome inválido. Deve conter apenas letras e espaços.");
      return;
    }

    if (!this.validarCPF(cpf)) {
      console.log("CPF inválido. Deve conter 11 dígitos numéricos.");
      return;
    }

    if (!this.validarEmail(email)) {
      console.log("E-mail inválido. Insira um formato correto (exemplo@dominio.com).");
      return;
    }

    if (!this.validarNumero(numero)) {
      console.log("Número de telefone inválido. Deve conter apenas dígitos e ter entre 10 e 11 caracteres.");
      return;
    }

    if (!this.validarSenha(senha)) {
      console.log("Senha inválida. Deve conter pelo menos 6 caracteres.");
      return;
    }

    console.log("Usuário adicionado com sucesso");
    return await this.repo.inserirUsuario(nome, cpf, email, numero, senha);
  }

  public async deletarUsuario(cpf: string): Promise<Usuario[]> {
    if (!this.validarCPF(cpf)) {
      console.log("CPF inválido. Não foi possível deletar o usuário.");
      return [];
    }
    console.log("Usuário deletado com sucesso");
    let lista: Usuario[] = await this.repo.deletarUsuario(cpf);
    return lista;
  }

  private validarNome(nome: string): boolean {
    return /^[a-zA-Z\s]+$/.test(nome);
  }

  private validarCPF(cpf: string): boolean {
    return /^\d{11}$/.test(cpf); // Apenas 11 dígitos numéricos
  }

  private validarEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  private validarNumero(numero: string): boolean {
    return /^\d{10,11}$/.test(numero); // Número deve ter entre 10 e 11 dígitos
  }

  private validarSenha(senha: string): boolean {
    return senha.length >= 6; // Senha deve ter pelo menos 6 caracteres
  }

  public async Mudarsenha(cpf: string, senha: string) {
    let lista: Usuario[] = [];
    lista = await this.repo.Mudarsenha(cpf, senha);
    return lista;
  }

  // Método para validar login com comparação simples de senha
  public async validarLogin(email: string, senha: string): Promise<boolean> {
    const usuario = await this.repo.buscarPorEmail(email);

    if (!usuario) {
      console.log(" Usuário não encontrado.");
      return false;
    }



    if (usuario.senha.trim() === senha.trim()) {
      return true;
    } else {
      console.log(" Senha incorreta.");
      return false;
    }
  }
}
