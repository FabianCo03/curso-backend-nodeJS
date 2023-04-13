const boom = require('@hapi/boom');
// schema que voy a validar, sacar del request la información (property) y ahí si aplicar el schema

function validatorHandler(schema, property) {
  //closures
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
