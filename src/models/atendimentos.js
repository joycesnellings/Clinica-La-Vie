const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologos = require("./psicologos");
const Pacientes = require("./pacientes");

const Atendimentos = db.define(
    "Atendimentos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        data_atendimento: {
            type: DataTypes.DATE
        },
        observacoes: {
            type: DataTypes.STRING
        },
        pacientes_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id",
            }
        },
        psicologos_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id",
            }
        },
        
    }, {
        tableName: "atendimentos",
    });

module.exports = Atendimentos;