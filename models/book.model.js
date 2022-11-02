const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/db')
const Author = require('./author.model')

class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timesRead: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    // this is my foreign key
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: 'id'
        },
        defaultValue: null
    }
}, {
    sequelize: db,
    modelName: 'Book'
})

module.exports = Book