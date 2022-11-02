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

module.exports = Author