const { Sequelize } = require('sequelize')
const path = require('path')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'moreBooks.sqlite'),
    // to NOT log the raw SQL:
    // logging: false
})

module.exports = db;