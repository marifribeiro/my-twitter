const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('twitter', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Sucesso ao conectar no banco de dados')
} catch(err) {
  console.log(`Erro ao conectar no banco de dados: ${err}`)
}

module.exports = sequelize