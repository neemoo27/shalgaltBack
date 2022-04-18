const express = require("express");
const router = express.Router();
const ToDoListController = require("../controller/ToDoListController");


router.get('/lists', ToDoListController.read_List);
router.put('/updatelist/:id', ToDoListController.update_List);
router.post('/createlist', ToDoListController.create_List);
router.delete('/deletelist/:id', ToDoListController.delete_List);


module.exports = router;