const Paciente = require("./pacientes");
const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");


Atendimentos.belongsTo(Psicologos,{
    foreignKey: 'psicologos_id',
});
Atendimentos.belongsTo(Paciente,{
    foreignKey: 'pacientes_id',
});
Psicologos.hasMany(Atendimentos,{
    foreignKey: 'psicologos_id',
});
Paciente.hasMany(Atendimentos,{
    foreignKey: 'pacientes_id',
});

module.exports = {
    Atendimentos,
    Paciente,
    Psicologos,
};