const { Paciente } = require("../models");
require("datejs");

const pacienteController = {
    async listarPacientes(req, res) {
        const listarPacientes = await Paciente.findAll({});

        res.status(200).json(listarPacientes);
    },

    async listarPacienteById(req, res) {
        try {
            const { id } = req.params;

            const pacienteId = await Paciente.findByPk(id);

            res.status(200).json(pacienteId)
        } catch (error) {
            res.status(404);
        }
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body;

        const novoPaciente = await Paciente.create({ nome, email, idade })

        res.status(201).json(novoPaciente);
    },
    async editarPaciente(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            await Paciente.update({
                nome,
                email,
                idade
            }, {
                where: {
                    id: id,
                }
            });
            const pacienteAtualizado = await Paciente.findByPk(id)

            res.json(pacienteAtualizado);
        } catch (error) {
            res.status(404)
        }
    },
    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;

            await Paciente.destroy({
                where: {
                    id: id,
                }
            })


            res.status(204).json({});

        } catch (error) {
            res.status(400);
        };
    },

};

module.exports = pacienteController;