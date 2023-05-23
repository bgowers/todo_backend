var express = require("express");
var router = express.Router();

let todos = [
  {
    id: 1,
    body: "A new todo!",
    isDone: false,
  },
];

/* GET home page. */
router.get("/", (req, res) => {
  res.send(todos);
});

router.post("/", (req, res) => {
  const newTodo = req.body;

  const lastId = todos[todos.length - 1]?.id || 0;

  todos.push({
    id: lastId + 1,
    body: newTodo.body,
    isDone: false,
  });

  res.end();
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;

  todos = todos.filter((todo) => todo.id !== id);

  res.end();
});

module.exports = router;
