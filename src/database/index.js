const Sequelize = require("sequelize");

const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "root";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) { "Erro de conexão com o DB." };


async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados Conectado!");
    } catch (error) {
        console.error("Erro na conexão", error)
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;