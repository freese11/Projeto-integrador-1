import { Pool } from "pg";
import { Database } from "./Database";
import { Cliente } from "../entity/cliente";

export class ClienteRepository {

    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarClientes(): Promise<Cliente[]> {

        const query = "SELECT * FROM public.Clientes";
        const result = await this.pool.query(query);

        const listaClientes: Cliente[] = [];

        for (const row of result.rows) {
            const cliente = new Cliente(row.cpf, row.nome, row.email, row.telefone);
            listaClientes.push(cliente);

        }
        return listaClientes;
    }

    public async inserirCliente(cpf: number, nome: string, email: string, telefone: string) {

        let query = 'INSERT INTO public.clientes(id, nome, email, telefone)VALUES ($1, $2, $3,$4);'
        return await this.pool.query(query, [cpf, nome, email, telefone])
    }



    public async BuscarPorId(cpf: number): Promise<Cliente[]> {
        let query = "SELECT cpf, nome, email, telefone FROM public.clientes where id=$1"
        let result = await this.pool.query(query, [cpf])

        const listarClientes: Cliente[] = [];

        for (const row of result.rows) {
            const cliente = new Cliente(row.cpf, row.nome, row.email, row.telefone)
            listarClientes.push(cliente)

        }
        return listarClientes
    }

    public async deletarCliente(cpf: number) {
        const query = ' DELETE FROM public.clientes WHERE cpf =$1;'
        const result = await this.pool.query(query, [cpf])
        return result.rows;
    }

    public async retornarCliente(cpf: number): Promise<Cliente> {
        let query = "SELECT * FROM public.produtos where id=$1"
        let result = await this.pool.query(query, [cpf])
        let row = result.rows[0]
        const cliente = new Cliente(row.cpf, row.nome, row.email, row.telefone)
        return cliente

    }
}