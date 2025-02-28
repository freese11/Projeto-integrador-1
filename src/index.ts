
import { Vendas } from "./entity/vendas"
import { ClienteService } from "./service/ClienteService"
import { ProdutosService } from "./service/ProdutoService"
import { UsuarioService } from "./service/UsuarioService"
import { VendasService } from "./service/VendasService"
import { ClienteView } from "./view/ClienteVIew"
import { ProdutosView } from "./view/ProdutoView"
import { UsuarioView } from "./view/UsuarioVIew"
import { VendasView } from "./view/VendasView"
async function vendas() {
  const venda = new VendasService()
  console.table(await venda.listarVendas())
  let jsk= new Date(2024-12-11)
  venda.inserirVenda(88484,11,jsk,"12",500,"100","CONFIRMADA",3)
  console.table(await venda.listarVendas())
}
async function cliente() {
  const serviceClientes = new ClienteService()
  //console.table(await serviceClientes.listarClientes())
  //serviceClientes.inserirCliente(11,"test","test","15454")
  console.table(await serviceClientes.listarClientes())
 // console.table(await serviceClientes.BuscarPorId(1))
}

async function produtos() {
  const serviceProdutos = new ProdutosService()
  console.table(await serviceProdutos.listarProdutos())
  //console.table(await serviceProdutos.BuscarPorCod(5))
  serviceProdutos.inserirProduto(11, "adidas", 119, 10, "camisa", "preto/branco", "camisa adidas", "ativo")
  console.table(await serviceProdutos.listarProdutos())
}

async function usuarios() {
  const serviceUsuarios = new UsuarioService()
  //console.table(await serviceUsuarios.listarUsuarios1())
  serviceUsuarios.inserirUsuario("ADM", "100", "adm@gmail.com", "5199659")
  console.table(await serviceUsuarios.listarUsuarios1())
}
async function clientesVIew(){
const service3= new ClienteView()
service3.esxibirMenu()}


async function ProdutoView() {
  const service1=new ProdutosView()
  service1.esxibirMenu()}


async function usuarioView(){
  const service2 = new UsuarioView()
  service2.esxibirMenu()
}




async function vendasView() {
  const service4=new VendasView()
  service4.esxibirMenu()
  
}


//usuarioView()

//endas()
//vendasView()
//clientesVIew()
ProdutoView()
//usuarioView()
