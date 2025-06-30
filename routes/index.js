const express = require('express');
const router = express.Router();

router.use('/workpackages', require('./workPackage'));
router.use('/tasks', require('./task'));
router.use('/subtasks', require('./subTask'));
router.use('/kers', require('./ker'));
router.use('/projectobjectives', require('./projectObjective'));
router.use('/technicalexploitation', require('./technicalExploitation'));
router.use('/deliverables', require('./deliverable'));
router.use('/userroles', require('./userRole'));
router.use('/users', require('./user'));
router.use('/organizations', require('./organization'));

module.exports = router;
