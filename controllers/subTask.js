const { SubTask } = require('../models');
const createError = require('../utils/createError');

module.exports = {
  async getAll(req, res, next) {
    try {
      const items = await SubTask.findAll();
      res.json(items);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const item = await SubTask.findByPk(req.params.id);
      if (!item) {
        throw createError(404, 'Not found');
      }
      res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const item = await SubTask.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const item = await SubTask.findByPk(req.params.id);
      if (!item) {
        throw createError(404, 'Not found');
      }
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const item = await SubTask.findByPk(req.params.id);
      if (!item) {
        throw createError(404, 'Not found');
      }
      await item.destroy();
      res.json({ message: 'Deleted' });
    } catch (err) {
      next(err);
    }
  }
};
