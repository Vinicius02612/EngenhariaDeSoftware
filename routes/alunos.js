const express = require('express')
const app = express()


//rotas pra mostar os alunos....
app.get('/', (req, res)=>{
    res.status(200).send({
        Alunos:{
            nome:'rokuten',
            idade: 23,
            turma: "2 ano"
        }
    })
})

module.exports = app