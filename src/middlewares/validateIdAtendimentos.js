const { Atendimentos } = require("../models");

module.exports = async(req, res, next) => {
    let { id } = req.params;
    let isEmpty = await Atendimentos.findByPk(id)
    id = Number(id);

    if (isNaN(id) || Object.is(isEmpty, null)) {
        res.status(404).send(`Id não encontrado.`);
    }

    next();
}