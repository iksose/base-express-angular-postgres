import express from 'express';
import { Todo } from '../models/todo';

const router = express.Router();

router.post('/', async(req, res) => {
  const todo = await Todo.add({text: req.body.text, complete: false});
  console.log("done", todo);
  return res.end();
})
router.get('/', async(req, res) => {
  const todos = await Todo.all();
  console.log("done", todos);
  return res.json(todos)
})

export { router as todos }
