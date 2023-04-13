const boom = require('@hapi/boom');
// schema que voy a validar, sacar del request la información (property) y ahí si aplicar el schema

function validatorHandler(schema, property) {
  //closures
  return (req, res, next) => {
    //esta arrow function recibe un esquema, con el property le decimos donde encontrar la información y por ende va a retornar un middleware de forma dinámica

    //de dónde viene la información?, la obtenemos de un request y dinámicante le digo de donde sacar la información
    //la información dentro de un request puede venir en varios lugares, depende de si es un post o un get
    //para Post (informacion -> body) para Get (informacion -> params ó query)

    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
