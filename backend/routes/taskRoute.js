import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { createTask, getTaskById, getTasks, updateTask, deleteTask } from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.route('/ms')
 .get(authMiddleware, getTasks)
 .post(authMiddleware, createTask);

taskRouter.route('/:id/ms')
 .get(authMiddleware, getTaskById)
 .put(authMiddleware, updateTask)
 .delete(authMiddleware, deleteTask);


export default taskRouter;