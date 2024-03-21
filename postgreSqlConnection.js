const { Sequelize } = require('sequelize');

const database = process.env.DATABASE_NAME
const userName = process.env.POSTGRE_USER
const password = process.env.POSTGRE_PASSWORD

const sequelize = new Sequelize(database, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
    sequelize,
    connectDb
}