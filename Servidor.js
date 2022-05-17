// const http =require('http')

// const server= http.createServer((req,res)=>{

//     res.statusCode=200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Hola Mundo con Node desde un servidor")

// })

// server.listen(3000, ()=>{

//     console.log("Servidor on en puerto 3000")
// })

const express=require('express')
const res = require('express/lib/response')



const app=express()

//middlleware

app.use(express.json())

//rutas
app.get('/',(req,res)=>{

    res.send("Holaa mundoss")
  
  })

  app.post('/',(req,res)=>{

    console.log("Post funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })
  
  app.put('/',(req,res)=>{

    console.log("Put funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })
  app.delete('/',(req,res)=>{

    console.log("Delete funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })
  
 app.get("/about",(req,res)=>{
     res.sendFile('./views/index.html',{root:__dirname})
 })



 app.post("/saludar",(req,res)=>{
   console.log(req.body)
    res.send({
        message:"Hola Como estas"+req.body.name
        
    })
 })




//poner a escuchar nuestro servidor
app.listen(3000,()=>{
    console.log("Servidor on en el puerto 3000")
})


