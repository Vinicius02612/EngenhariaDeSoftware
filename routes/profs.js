const express = require('express')
const { route } = require('../src/app')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).send({
        mensagem:'retorna professores cadastrados'
    })
})

router.post('/', (req, res)=>{
    const prof = {
        cidade:req.body.cidade,
        idade: req.body.idade
    }

    res.status(200).send({
        mensagem:'Cadastrar professores',
        professorCriado: prof

    })
})

router.get('/:id_prof', (req, res)=>{
    const id = req.params.id_prof
    
    res.status(200).send({
        Mensagem: 'Este é o id',
        id: id
    })
})
module.exports = router
