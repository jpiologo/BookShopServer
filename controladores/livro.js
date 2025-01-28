const { getTodosLivros , getLivroPorId , insereLivro , modificaLivro , excluiLivro } = require("../servicos/livro")

function getLivros(req, res) {

    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function getLivro(req, res) {

    try{
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID informado não é um formato válido!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function postLivro(req, res) {
    try {

        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso!')
        } else {
            res.status(422)
            res.send("'Nome' key is required")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro (req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID informado não é um formato válido!")
        }

        modificaLivro(body, id)
        res.send("Livro modificado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID informado não é um formato válido!")
        }

        excluiLivro(id)
        res.send("Livro excluído com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}

//
