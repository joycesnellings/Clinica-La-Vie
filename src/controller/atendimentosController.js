const { Atendimentos } = require("../models");

const atendimentosController = {
    async listarAtendimentos(req, res) {
        const listarAtendimentos = await Atendimentos.findAll({});

        res.status(200).json(listarAtendimentos);
    },

    async listarAtendimentosById(req, res) {
        try {
            const { id } = req.params;

            const atendimentosId = await Atendimentos.findByPk(id);

            res.status(200).json(atendimentosId)
        } catch (error) {
            return res.status(404);
        }
    },

    async cadastrarAtendimentos(req, res) {
        try {
            const { pacientes_id, data_atendimento, observacoes } = req.body;
            
            const psicologos_id = req.auth.id;

            const novoAtendimentos = await Atendimentos.create({psicologos_id, pacientes_id, data_atendimento, observacoes});

            return res.status(201).json(novoAtendimentos);

        } catch (error) {
            return res.status(404);
        }
    },
};

module.exports = atendimentosController;
