const { Router } = require("express")
const { getLivros, getLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST")
})

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})

module.exports = router

//Artigo sobre o protocolo http: https://www.alura.com.br/artigos/http#:~:text=HTTP%20%C3%A9%20um%20protocolo%2C%20uma,nome%20Hyper%20Text%20Transport%20Protcolo