import { UsuarioView } from "./view/UsuarioView";
import { ClienteView } from "./view/ClienteView";
import { ProdutosView } from "./view/ProdutoView";
import { VendasView } from "./view/VendasView";
import { UsuarioService } from "./service/UsuarioService";
import promptSync from "prompt-sync";

const prompt = promptSync();
const usuarioService = new UsuarioService();

async function autenticarUsuario() {
    let autenticado = false;

    while (!autenticado) {
        console.log(" Login  FreeseSalesSystem ");
        const email = prompt("Digite seu e-mail: ");
        const senha = prompt("Digite sua senha: ");

        const usuarioValido = await usuarioService.validarLogin(email, senha);

        if (usuarioValido) {
            console.log(" Login bem-sucedido! Acessando o sistema...");
            autenticado = true;
            exibirMenuPrincipal();
        } else {
            console.log(" E-mail ou senha incorretos. Tente novamente.");
        }
    }
}

async function exibirMenuPrincipal() {
    let sair = false;

    while (!sair) {
        console.log("📌 MENU PRINCIPAL 📌");
        console.log("1 - Gerenciar Usuários");
        console.log("2 - Gerenciar Clientes");
        console.log("3 - Gerenciar Produtos");
        console.log("4 - Gerenciar Vendas");
        console.log("5 - Sair");

        let opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                const usuarioView = new UsuarioView();
                await usuarioView.esxibirMenuUsuario();
                break;
            case "2":
                const clienteView = new ClienteView();
                await clienteView.esxibirMenuCliente();
                break;
            case "3":
                const produtoView = new ProdutosView();
                await produtoView.esxibirMenuProduto();
                break;
            case "4":
                const vendasView = new VendasView();
                await vendasView.esxibirMenuVendas();
                break;
            case "5":
                console.log(" Saindo ");
                sair = true;
                break;
            default:
                console.log(" Opção inválida. Escolha entre 1 e 5.");
        }
    }
}

// Inicia o sistema pedindo login
autenticarUsuario();
