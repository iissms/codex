const express = require('express');
const router = express.Router();

router.use('/work-packages', require('./workPackage'));
router.use('/tasks', require('./task'));
router.use('/sub-tasks', require('./subTask'));
router.use('/kers', require('./ker'));
router.use('/project-objectives', require('./projectObjective'));
router.use('/technical-exploitations', require('./technicalExploitation'));
router.use('/deliverables', require('./deliverable'));
router.use('/user-roles', require('./userRole'));
router.use('/users', require('./user'));
router.use('/organizations', require('./organization'));

module.exports = router;
