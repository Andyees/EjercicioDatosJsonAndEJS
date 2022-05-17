const {frutero,imprimirFrutas}=require("./frutas")
const fs = require('fs');
const os =require('os')
const colors=require('colors')
const matematica=require("./math")
const ruta="./"
let textoleido

// metodoImprimir(frutero)
console.log(frutero)
imprimirFrutas(frutero)

console.log(matematica.pi)

fs.access(ruta,fs.constants.F_OK,(err)=>{

    if(err){
        console.error("no fue posible acceder al archivo")
    }

    else{
        fs.readFile(ruta,"utf-8",(err,data)=>{
        if(err){
            console.error("no fue posible leer el archivo".red)
            console.log(err)
        }
        else{
         console.log(data)
         textoleido=JSON.parse(data)
         console.log(textoleido.mensaje )
        }

        })

    }
})

const network=os.networkInterfaces()




