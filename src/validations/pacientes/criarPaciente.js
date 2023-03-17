const { validate, Joi } = require("express-validation");

// O joi gera o erro, enquanto o middleware capta o erro e repassa na request.


module.exports = validate({
    //Não pode ser um objeto simples, precisa ser um Joi object.
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        idade: Joi.date().required(),
    }),
});