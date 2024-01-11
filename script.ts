class usuario {
    nome:string;
    cpf:string;
    sexo:string;
    constructor(nome:string,cpf:string,sexo:string){
        this.nome = nome
        this.cpf = cpf
        this.sexo = sexo
    }
}

class viagem {
    pontoInicial: string;
    destinos:string[];
    distancias:number[];
    dataSaida:Date;
    estado:string;
    constructor(inicio:string, final:string[], distancia:number[],saida:Date){
        this.pontoInicial = inicio;
        this.destinos = final;
        this.distancias = distancia;
        this.dataSaida = saida
    }
}

class transacaoFinanceira {

}

class motorista extends usuario {
    carro:string;
    constructor(nome:string,cpf:string,sexo:string,carro:string){
        super(nome,cpf,sexo)
        this.carro = carro
    }
}

class passageiro extends usuario {
    viagens:viagem[]
}
function menu():void{
    
}
function menuMotorista():void{
    let acao:string|null 
    do{
        acao = prompt("MENU:\n1 - Criar viagem\n2 - Cancelar viagem\n3 - Completar carona\n4 - Encerrar")
        if(acao=="1"||acao=="2"||acao=="3"||acao=="4"){
            if(acao==="1"){
                criarViagem()
            }
            if(acao==="2"){
                cancelarViagem()
            }
            if(acao==="3"){
                completarCarona()
            }
        } else {
            console.log("Escolha inválida, escolha entre [1],[2],[3],[4]")
        }
    }while(acao!="4")
}
function menuPassageiro():void{
    let acao:string|null 
    do{
        acao = prompt("MENU:\n1 - Procurar viagem\n2 - Avaliar viagem\n3 - Encerrar")
        if(acao=="1"||acao=="2"||acao=="3"){
            if(acao==="1"){
                procurarViagem()
            }
            if(acao==="2"){
                avaliarViagem()
            }
        } else {
            console.log("Escolha invalida, escolha entre [1],[2],[3],[4]")
        }
    }while(acao!="3")
}


function main(){
    let escolha:string|null = prompt("Voce e motorista ou passageiro?\n1 - motorista\n2 - passageiro")
    if(escolha!=="1" && escolha!=="2"){
        console.log("Tipo invalido, escreva apenas 1-[motorista] ou 2-[passageiro]")
    } else if(escolha==="1") {
        menuPassageiro()
    } else if(escolha==="2"){
        menuMotorista()
    }
}

main();
