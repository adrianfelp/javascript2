   // Operador Spread

const obj1 = 
    {nome: 'Adrian',
    sobrenome: 'Felipe',
    idade: 25
    }

const obj2 = {...obj1}
obj2.idade = 34

console.log(obj1)
console.log(obj2)