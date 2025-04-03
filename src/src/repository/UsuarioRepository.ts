import { Pool } from "pg";
import { Database } from "./Database";
import { Usuario } from "../entity/usuario";





export class UsuarioRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }
    async listarUsuarios1(): Promise<Usuario[]> {

        const query = "SELECT * FROM public.usuarios";
        const result = await this.pool.query(query);

        const listarUsuarios1: Usuario[] = [];

        for (const row of result.rows) {
            const usuario = new Usuario(row.nome,row.cpf ,row.email,row.numero,row.senha);
            listarUsuarios1.push(usuario)

        }
return listarUsuarios1

    }
public async inserirUsuario(nome:string,cpf:string,email:string,numero:string,senha:string){
    let query ="INSERT INTO public.usuarios(nome, cpf, email, numero,senha)VALUES ($1,$2,$3,$4,$5);"
    return await this.pool.query(query,[nome,cpf,email,numero,senha])
}
public async deletarUsuario(cpf:string) {
    const query = 'DELETE FROM public.usuarios WHERE cpf=$1'
    const result = await this.pool.query(query, [cpf])
    return result.rows;
}
public async Mudarsenha(cpf: string, senha: string) {
   
        const query = 'UPDATE public.usuarios SET  senha=$2 WHERE cpf =$1';
        const result = await this.pool.query(query, [cpf, senha]);
        return result.rows;
    
}

public async buscarPorEmail(email: string): Promise<Usuario | null> {
    const query = "SELECT * FROM public.usuarios WHERE email = $1";
    const result = await this.pool.query(query, [email]);

    if (result.rows.length > 0) {
        const row = result.rows[0];
        return new Usuario(row.nome, row.cpf, row.email, row.telefone, row.senha);
    }

    return null; // Retorna `null` se não encontrar o usuário
}
}


