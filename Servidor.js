// const http =require('http')

// const server= http.createServer((req,res)=>{

//     res.statusCode=200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Hola Mundo con Node desde un servidor")

// })

// server.listen(3000, ()=>{

//     console.log("Servidor on en puerto 3000")
// })
const morgan=require('morgan')
const express=require('express')
const res = require('express/lib/response')
const fs = require('fs');
const { Console } = require('console');
var usuarios =[]
var usuariosString
let ruta="./Datos.json"

var imagen="https://upload.wikimedia.org/wikipedia/commons/f/ff/Anas_platyrhynchos_qtl1.jpg"






const app=express()
//Configuracion
app.set("view engine","ejs")
app.set("port",3000)
app.set("NameServer","TiendaDeRopaAnita")

//middlleware
 
app.use(express.json())
app.use(morgan("dev"))


//rutas
// app.all('/saludar',(req,res,next)=>{

//   if(req.body.name==undefined){
//     res.status(403).send("Sorry no tienes el nombre")
//   }
//   else{
//     console.log("la peticion paso por la ruta Saludar")
//   next()}



// })

// app.get('/',(req,res)=>{

//     res.send("Holaa mundoss")
  
//   })

//   app.post('/',(req,res)=>{

//     console.log("Post funcionando en la ruta raiz")

//     res.send({nombre: "Andres", Apellido:"Agudelo"})
//   })
  
//   app.put('/',(req,res)=>{

//     console.log("Put funcionando en la ruta raiz")

//     res.send({nombre: "Andres", Apellido:"Agudelo"})
//   })
//   app.delete('/',(req,res)=>{

//     console.log("Delete funcionando en la ruta raiz")

//     res.send({nombre: "Andres", Apellido:"Agudelo"})
//   })
  
//  app.get("/about",(req,res)=>{
//      res.sendFile('./views/index.html',{root:__dirname})
//  })


//  app.post("/saludar",(req,res)=>{
//    console.log(req.body)
//    res.json({ message:"Hola Como estas "+req.body.name})

//  })
//  app.get("/saludar",(req,res)=>{
 
//   res.json({ message:"Hola Como estas esto es un get"})

// })
// app.delete("/saludar",(req,res)=>{

//   res.json({ message:"Hola Como estas esto es un delete "})

// })









//poner a escuchar nuestro servidor


function getUser(ListUsuarios,id){
  for (x of ListUsuarios){
   
      if(x.id===id){
          return x;
      }
  }
  return {"Response": "Not Found User"}
}
function encontrar_id(array, elemento) {
  for (i = 0; i < array.length; i++) {
    if (array[i].id === elemento) {
      return i ;
    }
  }
  return undefined;
}


//Metodos
function getUser(ListUsuarios,id){
  for (x of ListUsuarios){
   
      if(x.id===id){
          return x;
      }
  }
  return {"Response": "Not Found User"}
}

function leerDatos(ruta){
  fs.access(ruta,fs.constants.F_OK,(err)=>{
   
    if(err){
 
        console.error("No fue posible acceder al archivo")
    }
    else{
   fs.readFile(ruta,"utf-8",(error,data)=>{
    
    if(error){
        console.error("No fue posible leer el archivo")

    }
    else{
         if(data.length<1){
           console.log("Archivo Vacio")
         }
         else{
        usuarios=JSON.parse(data)
        console.log(usuarios)
      
          }
    }

   })

    }

 })

}

 function ActualizarDatos(ruta,datos){
   fs.access(ruta,fs.constants.F_OK,(err)=>{
     if(err){
         console.error("no fue posible acceder al archivo")
     }
     else{
         fs.writeFile(ruta,datos,(err)=>{

         if(err){
           console.error("no se pudo escribir los datos")
         }
         else{
           Console.log("Se han actualizado los datos en el archivo local")
         }


         })
     }
 })
 }
//ROUTESS

app.get("/user",(req,res)=>{

 let user= getUser(usuarios,req.body.id)
 res.json(user)


})

app.post("/user",(req,res)=>{

  if(req.body.id===undefined || req.body.Name===undefined || req.body.Apellido===undefined ||req.body.Age===undefined || req.body.Cargo===undefined )  {
      res.send("Usuario NO Agregado porque no cumple la estructura, El usuario que querias agregar es "  +Object.values(req.body))
  }  
  else{
      usuarios.push(req.body)
      usuariosString=JSON.stringify(usuarios)
      ActualizarDatos(ruta,usuariosString)
   
      res.send("Usuario Agregado exitosamente, El usuario que agregaste es "+Object.values(req.body))
  }
  

})

app.delete("/user",(req,res)=>{

  let user= getUser(usuarios,req.body.id)

  let id= encontrar_id(usuarios,req.body.id)
  
  if(id===undefined){
          res.send("User not found")
  }
  else{
          var removed = usuarios.splice(id,1)
          console.log(usuarios)
          usuariosString=JSON.stringify(usuarios)
          ActualizarDatos(ruta,usuariosString)
          res.send("El usuario  "+removed+" Fue eliminado exitosamente")
  }
 


})


app.get("/render",(res,req)=>{



})



app.get("/motorEjs",(req,res)=>{

 
 res.render("index.ejs",{imagen:imagen})


})


app.listen(app.get("port"),()=>{
    console.log("Servidor on en el puerto 3000")
})

leerDatos(ruta)



