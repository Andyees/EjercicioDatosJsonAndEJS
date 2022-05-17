const frutas=["banana","mango","pera","fresa"]

const imprimirFrutas=(Frutero)=>{

    Frutero.forEach(element => {
        console.log(element)
    });
}

module.exports={
  frutero: frutas,
  imprimirFrutas

}

console.log("hola soy fruta")

