const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')
const pool = require('../libs/postgresPool');

class CategoryService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    const newCategory = await models.Category.create(data)
    return newCategory
  }

  async find() {
    const categories = await models.Category.findAll()
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    })
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
