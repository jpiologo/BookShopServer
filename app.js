const express = require("express")
const rotaLivro = require('./rotas/livro')

const app = express()
app.use(express.json)
const port = 8000


app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

//Para saber mais sobre o Express JS: https://expressjs.com/pt-br/
//Para dar start no servidor: nodemon app.js
