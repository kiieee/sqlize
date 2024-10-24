const connection = require("../connection")
const {DataTypes} = require("sequelize")


const Book = connection.define("Book", {
    bookID : {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title : {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
    author : {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    },
    authorID : {
        type: DataTypes.INTEGER,
    },
    genre: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    },
})

module.exports = Book