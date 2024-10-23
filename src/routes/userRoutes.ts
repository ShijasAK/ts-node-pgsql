import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userController';
import { authenticateJWT } from '../middlewares/auth';
const router = Router();

router.get('/', authenticateJWT, getAllUsers);
router.get('/:id', authenticateJWT, getUserById);

export default router;
