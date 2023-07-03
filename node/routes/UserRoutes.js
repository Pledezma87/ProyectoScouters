import express from 'express';
import { registerUser, loginUser,UpdateRegister} from '../controllers/UsersController.js';
import { authenticateUser } from '../authMiddelware/authMiddelware.js';



const router = express.Router();

// Ruta para registrar un nuevo usuario (solo accesible para administradores)
router.post('/register', registerUser, authenticateUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);
router.get('/admin', authenticateUser);
router.put('/:id', UpdateRegister)

export default router;