const { check } = require("express-validator");
const emails = require("../controller/psicologosController");

module.exports = {
    validateEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("E-mail já existente")
        .custom(async(email) => {
            const existingUser =
                await emails.listarPsicologos({ email })
            if (existingUser) {
                throw new Error("E-mail em uso");
            }
        })
}