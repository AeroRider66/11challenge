const router = require('express').Router();

// import routers for the add and delete tasks
const addRouter = require('./addNotes');
const deleteRouter = require('./deleteNote');

router.use('/addTask', addRouter);
router.use('/deleteTask', deleteRouter);

module.exports = router;