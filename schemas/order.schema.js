const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const state = Joi.string().min(4);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const updateOrderSchema = Joi.object({
  state: state,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
