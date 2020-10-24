// importar dependencia
const express = require('express');
const path = require('path');
const pages =require('./pages');
// iniciando o express
const server = express()
server
// utilizar body do req
.use(express.urlencoded({ extended: true }))
// utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotas de aplicação
.get('/', pages.index)
.get('/create-orphanage', pages.createOrphanage)
.get('/orphanage', pages.orphanage)
.post('/save-orphanage', pages.saveOrphanage)
.get('/orphanages', pages.orphanages)

// ligar o server
server.listen(5500)