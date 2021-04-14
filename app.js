const express = require ('express')
const app= express()

const port = 3000

app.get('/',( req, res)=>{
    res.send('corriendo en el puerto :3000')
})

app.listen(port, ()=>{
    console.log('corriendo en el puerto :3000')
})