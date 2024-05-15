import { Router } from 'express';
import { todoController } from '../controllers/todo.controller.js';

const router = Router();

router.get('/', todoController.getAll);
router.post('/login', todoController.createPost);

export default router;