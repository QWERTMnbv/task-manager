const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk')
AWS.config.update({
    region: 'us-east-1'
})

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router