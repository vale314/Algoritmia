var array=[[87,33],[45,12],[20,16],[54,23],[45,42],[26,12],[30,13],[54,21],[76,47],[12,22],[64,44],[23,11]]
//peso valor

var arrayRelaccion=[]

var mochila=[]

array.map((elem)=>{
    arrayRelaccion.push([elem,elem[1]/elem[0]])
})

arrayRelaccion.sort((a,b)=>{
    return b[1]-a[1];
})

arrayRelaccion.map((elem)=>{
    console.log(elem)
})

var peso=0;
var costo=0
while(peso<280&&arrayRelaccion.length>0){
    var aux=arrayRelaccion.shift()
    if(aux[0][0]+peso<280){
        peso=peso+aux[0][0]
        costo=costo+aux[0][1]
        mochila.push(aux)
    }
}

console.log("Peso: "+peso)
console.log("Costo:"+ costo)

mochila.map((elem)=>{
    console.log(elem)
})
