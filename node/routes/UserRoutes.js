import express from 'express';
import { registerUser, loginUser,  } from '../controllers/UsersController.js';
import { authenticateUser } from '../authMiddelware/authMiddelware.js';
import User from '../models/UsersModel.js';
;

const router = express.Router();
router.post('/register', registerUser, authenticateUser);
// Ruta para registrar un nuevo usuario (solo accesible para administradores)
router.post('/register', registerUser, authenticateUser);
// Ruta para iniciar sesión
router.post('/login', loginUser);



// Ruta para confirmar correo electrónico
router.get('/confirm/:token', async (req, res) => {
  try {
    console.log("entra")
    const token = req.params.token;
    console.log(token)
    
    const user = await User.findOne({ confirmationToken: token });
    console.log(user)
    if (!user) {
      return res.redirect('http://localhost:3000/error');
    }

   const userUpdate = await User.updateOne(
      { _id: user._id },
      { $set: { active: 1, confirmationToken: '' } }
    );
    console.log(userUpdate)

    return res.redirect('http://localhost:3000/login');
  } catch (error) {
    console.error('Error al confirmar correo electrónico:', error);
    res.status(500).json({ message: 'Error al confirmar correo electrónico' });
  }
});



router.get('/admin', authenticateUser);


export default router;