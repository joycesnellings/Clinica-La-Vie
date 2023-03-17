const {Paciente,Psicologos,Atendimentos} = require ("../models");


const dashboard = {

    async numeroPacientes (req,res){
        const numeropacientes = await Paciente.findAndCountAll();
        return res.json(`O numero total de pacientes cadastrados no banco é de : ${numeropacientes.count}`);
    },
    async numeroPsicologos (req,res){
        const numeroPsicologos = await Psicologos.findAndCountAll();
        return res.json(`O numero total de Psicologos cadastrados no banco é de : ${numeroPsicologos.count}`);
    },
    async numeroAtendimentos (req,res){
        const numeroAtendimentos = await Atendimentos.findAndCountAll();
        return res.json(`O numero total de Atendimentos cadastrados no banco é de : ${numeroAtendimentos.count}`);
    },
    async media (req,res){
        const numeroPsicologos = await Psicologos.findAndCountAll();
        const numeroAtendimentos = await Atendimentos.findAndCountAll();
        return res.json(`A média de atendimento por psicologo é de: ${numeroAtendimentos.count / numeroPsicologos.count}`);
    }
};


module.exports = dashboard;