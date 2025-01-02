const pool = require("../db/db");

createTodoPost = async (req, res) => {
  console.log(req.body);
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    console.log(newTodo);
    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
};

createTodoGet = (req, res) => {
  console.log("Todo Creation Form");
};

getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(err.message);
  }
};

getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.send(todo.rows[0].description);
  } catch (err) {
    console.log(err.message);
    res.send(`no database entry for id: ${req.params.id}`);
  }
};

updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = 2$",
      [description, id]
    );
    res.json("Todo was updated!");
  } catch (err) {
    console.log(err.message);
  }
};

deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createTodoGet,
  createTodoPost,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
