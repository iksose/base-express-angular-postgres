import express from 'express';
import { Comment } from '../models/comment';

const router = express.Router();

router.get('/:id', async(req, res) => {
  const comment = await Comment.get(req.params.id);
  res.render('comments/comment', {comment})
})

export { router as comments }
