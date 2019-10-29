const Joi = require('joi');
const {Response} = require('../helpers/response');

exports.createUserValidation = function(req, res, next) {
  const schema = Joi.object().keys({
    first_name: Joi.string().min(3).max(100).required()
      .error(new Error('First name must be between 5 to 100 digits')),
    surname: Joi.string().min(3).max(100).required()
      .error(new Error('Last name must be between 5 to 100 digits')),
    date_of_birth: Joi.date().error(new Error('invalid date')),
  });

  // eslint-disable-next-line consistent-return
  Joi.validate(req.body, schema, (error) => {
    if (error) {
      return Response(res, error.message, 400, error )
    }
    next();
  });
}
