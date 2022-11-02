/**** This file is unnecessary but was the first one with the models, hence I'm leaving it *****/

const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Author extends Model {}

Author.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    field: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'Author'
})

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


// console.log(Author === db.models.Author)
module.exports = {Author, Book, db}