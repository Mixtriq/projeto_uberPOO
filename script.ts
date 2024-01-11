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
    distancias: number[];
    dataSaida: Date;
    constructor(inicio:string, final:string[], distancia:number[],saida: Date){
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
    criarViagem(inicio:string, destinos:string[],distancias:number[],saida:Date): viagem{
        return new viagem(inicio,destinos,distancias,saida)  
    }
}

class passageiro extends usuario {
    entrarViagem(viagem:viagem){
    
    }
}




