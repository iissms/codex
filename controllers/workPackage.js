const { WorkPackage } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const items = await WorkPackage.findAll();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await WorkPackage.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const item = await WorkPackage.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({ error: err.errors.map(e => e.message) });
      }
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const item = await WorkPackage.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Not found' });
      }
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({ error: err.errors.map(e => e.message) });
      }
      res.status(500).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const item = await WorkPackage.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Not found' });
      }
      await item.destroy();
      res.json({ message: 'Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
