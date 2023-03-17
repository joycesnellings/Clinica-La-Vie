const express = require("express");
const routes = express.Router();
const pacienteController = require("../controller/pacienteController");
const psicologosController = require("../controller/psicologosController.js");

const pacienteValidation = require("../validations/pacientes/criarPaciente");
const psicologosValidation = require("../validations/psicologos/criarPsicologo");
const validateIdPacientes = require("../middlewares/validateIdPaciente");
const validateIdPsicologos = require("../middlewares/validateIdPsicologos");
const validateIdAtendimentos = require("../middlewares/validateIdAtendimentos");
const { validateEmail } = require("../middlewares/validateEmail");

const atendimentosController = require("../controller/atendimentosController")

const authController = require("../controller/authController");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");

const dashboard = require("../controller/dashboard");

routes.get("/pacientes/", pacienteController.listarPacientes);
routes.get("/pacientes/:id", validateIdPacientes, pacienteController.listarPacienteById);
routes.post("/pacientes/", pacienteValidation, pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", validateIdPacientes, pacienteValidation, pacienteController.editarPaciente);
routes.delete("/pacientes/:id", validateIdPacientes, pacienteController.deletarPaciente);

routes.get("/psicologos/", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", validateIdPsicologos, psicologosController.listarPsicologosById);
routes.post("/psicologos/", psicologosValidation, validateEmail, psicologosController.cadastrarPsicologos);
routes.put("/psicologos/:id", validateIdPsicologos, psicologosValidation, validateEmail, psicologosController.editarPsicologos);
routes.delete("/psicologos/:id", validateIdPsicologos, psicologosController.deletarPsicologos);

routes.get("/atendimentos/", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", validateIdAtendimentos, atendimentosController.listarAtendimentosById);
routes.post("/atendimentos/", auth, atendimentosController.cadastrarAtendimentos);

routes.post("/login/", authLoginValidation, authController.login);

routes.get("/dashboard/pacientes",dashboard.numeroPacientes);
routes.get("/dashboard/psicologos",dashboard.numeroPsicologos);
routes.get("/dashboard/atendimentos",dashboard.numeroAtendimentos);
routes.get("/dashboard/media",dashboard.media);

module.exports = routes;