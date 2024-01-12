let motoristas:motorista[] = [];
let passageiros:passageiro[] = [];
class usuario {
    protected nome:string;
    protected cpf:string;
    protected sexo:string;
    protected saldo:number;
    constructor(nome:string,cpf:string,sexo:string,saldo:number){
        this.nome = nome
        this.cpf = cpf
        this.sexo = sexo
        this.saldo = saldo
    }
    getCpf():string{
        return this.cpf
    }
    getSaldo():number{
        return this.saldo
    }
    setSaldo(valor:number){
        this.saldo = valor
    }
    getNome():string{
        return this.nome
    }
}
class transacaoFinanceira extends usuario{
    adicionarSaldo(){
        let i:number = parseFloat(prompt("Quanto de saldo você quer adicionar à sua conta?")!)
        this.saldo += i        
    }
    realizarPagamento():string{
        let a = prompt("CPF do motorista(apenas numeros):")
        for(let x = 0; x < motoristas.length; x++){
            if(motoristas[x].getCpf()==a){
                let i:number = parseFloat(prompt("Quanto de saldo você quer pagar ao motorista?")!)
                this.saldo -= i
                let z = motoristas[x].getSaldo()
                z += i
                motoristas[x].setSaldo(z)
                return `Transação de R$${i} realizada com sucesso ao/à motorista ${motoristas[x].getNome()}`
            }
        }
        return `Motorista não encontrado, verifique se digitou o CPF corretamente e tente mais uma vez.`
    }
}

class viagem {
    pontoInicial: string;
    destinos:string[];
    distancias:number[];
    dataSaida:Date;
    //estado:string;
    constructor(inicio:string, final:string[], distancia:number[],saida:Date){
        this.pontoInicial = inicio;
        this.destinos = final;
        this.distancias = distancia;
        this.dataSaida = saida
    }
}

class motorista extends usuario {
    carro:string;
    // viagemAtual:viagem;
    constructor(nome:string,cpf:string,sexo:string,carro:string){
        super(nome,cpf,sexo,0)
        this.carro = carro
    }
}

class passageiro extends usuario {
    //historicoViagens:viagem[]
    constructor(nome:string,cpf:string,sexo:string){
        super(nome,cpf,sexo,0)
    }
}


function cancelarViagem(){
  
}

function menuMotorista():void{
    let acao:number
    do{
        acao = parseInt(prompt("MENU:\n1 - Criar viagem\n2 - Cancelar viagem\n3 - Completar carona\n4 - Encerrar")!)
    
        switch(acao){
            case 1:
                //criarViagem()
                break
            case 2:
                //cancelarViagem()
                break
            case 3:
                //completarCarona()
                break
            case 4:
                break
            default:
                console.log("Escolha inválida, escolha entre [1],[2],[3],[4]")
                break
        }
    }while(acao!=4)
}
function menuPassageiro():void{
    
    let acao:number
    do{
        acao = parseInt(prompt("MENU:\n1 - Procurar viagem\n2 - Avaliar viagem\n3 - Encerrar")!)
        switch(acao){
            case 1:
                //procurarViagem()
                
                break
            case 2:
                //avaliarViagem()
                break
            case 3:
                break
            default:
                console.log("Escolha inválida, escolha entre [1],[2],[3],[4]")
                break
        }
    }while(acao!=3)
}
   
function main(){
    let x = prompt("Eae")
    console.log(`voce escreveu ${x}`)
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
