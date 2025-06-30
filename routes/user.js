const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/',
  validateRequest([
    body('email_address').isEmail(),
    body('full_name').notEmpty(),
    body('associated_organization').isUUID()
  ]),
  ctrl.create
);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
