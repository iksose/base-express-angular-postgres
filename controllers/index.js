import express from 'express';
import { comments } from './comments';
import { todos } from './todos';
const router = express.Router();

router.use('/comments', comments)
router.use('/todos', todos)

router.get('/', function(req, res) {
  res.render('index')
})

export { router as index }
