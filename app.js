const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")

const rotaLivro = require('./rotas/livro')
const rotaFavoritos = require('./rotas/favorito')

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

//Para saber mais sobre o Express JS: https://expressjs.com/pt-br/
//Para dar start no servidor: nodemon app.js
//Para saber mais sobre códigos de respostas http: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

//npm install
//npm install express
//npm install cors
//nodemon app.js
