const express = require('express');
const router = express.Router();

router.use('/api/workpackages', require('./workPackage'));
router.use('/api/tasks', require('./task'));
router.use('/api/subtasks', require('./subTask'));
router.use('/api/kers', require('./ker'));
router.use('/api/projectobjectives', require('./projectObjective'));
router.use('/api/technicalexploitation', require('./technicalExploitation'));
router.use('/api/deliverables', require('./deliverable'));
router.use('/api/userroles', require('./userRole'));
router.use('/api/users', require('./user'));
router.use('/api/organizations', require('./organization'));

module.exports = router;
