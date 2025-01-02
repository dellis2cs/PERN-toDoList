const { Router } = require("express");
const router = Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);
router.get("/new", todoController.createTodoGet);
router.get("/:id", todoController.getTodo);
router.put("/:id", todoController.updateTodo);
router.post("/new", todoController.createTodoPost);
router.delete("/:id", todoController.deleteTodo);
module.exports = router;
