const express = require('express')
const { route } = require('../src/app')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).send({
        Professor:{
         nome:'Vinicus da Silva Nunes',
        idade: 23,
        Disciplina: 'matematica',
        Turmas:{
            1: '1 ano',
            2:'2 ano',
            3: '3 ano'
        },
        horarios:{
            manha: '8 horas as 10 horas',
            tarde: ' 15:15 as  14:39'
        }
        }
    })
})

router.get('/:id_prof', (req, res)=>{
    const id = req.params.id_prof
    
    res.status(200).send({
        Mensagem: 'Este é o id',
        id: id
    })
})


router.post('/', (res, req)=>{
    req,status(200).send({
        Mensagem:'Cadastrar professores'
    })
})
module.exports = router
