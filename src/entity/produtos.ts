export class Produtos {
    private codproduto:number
    private marca:string
    private valor:number
    private estoque:number
    private tipo :string
    private cor :string
    private nome :string
    private ativoInativo:string

    constructor(codproduto:number,marca:string,valor:number,estoque:number,tipo:string,cor:string,nome:string,ativoINativo:string){
this.codproduto=codproduto
this.marca=marca
this.valor=valor
this.estoque=estoque
this.tipo=tipo;
this.cor=cor;
this.nome=nome;
this.ativoInativo=ativoINativo;

}
}