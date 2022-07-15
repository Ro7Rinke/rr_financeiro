class Conta {

    id:number
    senha:string
    email:string
    nome:string
    jwt?:string

    constructor(){
        this.id = 0
        this.senha = ''
        this.email = ''
        this.nome = ''
        this.jwt = ''
    }
}

export default Conta