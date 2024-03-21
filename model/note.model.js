const { sequelize } = require("../postgreSqlConnection")
const { DataTypes, Model } = require("sequelize")

class Note extends Model { }

Note.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { sequelize, timestamps: true, modelName: "Note" })

module.exports = Note
