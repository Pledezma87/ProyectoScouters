// import express from 'express';
// import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/UsersController.js'
// const router = express.Router()

// router.get('/', getAllUsers)
// router.get('/:id', getUser)
// router.post('/', createUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)


// export default router







import express from 'express';
import { registerUser, loginUser,} from '../controllers/UsersController.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);


// Ruta para iniciar sesión
router.post('/login', loginUser);

export default router;