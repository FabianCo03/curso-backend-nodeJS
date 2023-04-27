const boom = require('@hapi/boom');

const pool = require('../libs/postgresPool');

class CategoryService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    return data;
  }

  // relaciones: una categoría puede tener MUCHOS productos, pero un producto puede permanecer a una categoria
  // cuando utilizamos hasMany la relacion va a quedar en productos

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
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
