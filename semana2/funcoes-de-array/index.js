/* Exercicios de interpretação de código

1.  a) Vai imprimir um nome e apelido por vez, com o array original do lado
até fazer com cada um dos nomes e apelidos do array original.

2.  a) Agora irá retornar somente os nomes do array usuarios.

3.  a) Nesse irá imprimir somente os apelidos que não forem "chijo", vai imprimir
tanto o nome quanto o apelido de quem não tiver o apelido "chijo"

Exercicios de escrita de código 
1.*/
//  a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const NomesCachorrinhos = pets.map((item, i, array) => {
     console.log(item.nome)
 })
 console.log(NomesCachorrinhos)

 
//  b)
 const cachorrosSalcicha = pets.filter((item, i, array) => {
     return item.raca === "Salsicha"
 })
console.log(cachorrosSalcicha)

//  c)
    
    const petsPoodle = pets.filter((poodles) => {
        return poodles.raca === "Poodles"

    })
    
    
    const mensagem = petsPoodle.map((racaPoodle) => {
        return `Você ganhou um cupom de 10% de desconto para tosar o/a ${racaPoodle.nome}`
    )}
console.log(mensagem)


// 2.


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)
 const NomesMercadorias = produtos.map((mercadorias) => {
    return mercadorias.nome
})
console.log(NomesMercadorias)

// b)
const mercadoriasPromocao = produtos.map((descontos) => {
    return {nome: descontos.nome, preco: descontos.preco*0.95}

})
console.log(mercadoriasPromocao)

// c)
const catBebidas = produtos.filter((drinks) => {
    return drinks.categoria === "Bebidas"
})
console.log(catBebidas)

//  d)

const duvidarPorque = produtos.filter((ype) =>{
    return ype.nome.includes("Ypê")
})
console.log(duvidarPorque)

//  e)
const mensagemYpe = duvidarPorque.map((frase) =>{
    return `Compre ${frase.nome} por ${frase.preco}`
})
console.log(mensagemYpe)  //uhuu