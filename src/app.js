const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { urlencoded } = require('body-parser')
const morgan = require('morgan')

const routerProfs = require('../routes/profs')
const aluno = require('../routes/alunos')

app.use(morgan('dev'))

app.use('/profe', routerProfs)
app.use('/alunos', aluno)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//tratando os erros de requisição
app.use((req, res, next)=>{
    const erro = new Error("page not found 404")
    erro.status = 400
    next(erro)
})

//definindo cors da api
app.use((req, res, next)=>{
    res.header('Access-Controler-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Header', 
    'Origin, x-Requisited-with, Content-Type Accept, Authorization')

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allows-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
    next()
})


app.use((error, req, res)=>{
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})


module.exports = app