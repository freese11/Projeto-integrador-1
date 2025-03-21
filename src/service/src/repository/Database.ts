import { Pool } from "pg"
 
export class Database{
 
  static pool : Pool
 
  static iniciarConexao():Pool{
 
    this.pool = new Pool({
 
      user: 'postgres',
      password: '1234',
      host: 'localhost',
      database: 'Projeto_integrador',
      port: 5432
    });
 
    return this.pool;
   
  }
 
}