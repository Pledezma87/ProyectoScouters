const authenticateUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado. Falta el token de autenticación.' });
      }
  
      try {
        const decodedToken = jwt.verify(token, 'abc123'); 
        const userId = decodedToken.userId;
        const userRole = decodedToken.role;
  
        if (userRole !== 'admin') {
          return res.status(401).json({ message: 'No tienes permisos para realizar esta acción' });
        }
  
        const existingUser = await User.findById(userId);
        if (!existingUser) {
          return res.status(401).json({ message: 'Acceso no autorizado. Usuario no encontrado.' });
        }
  
        req.user = {
          id: existingUser._id,
          name: existingUser.name,
          role: existingUser.role
        };
  
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
      }
    } catch (error) {
      console.error('Error al autenticar al usuario:', error);
      res.status(500).json({ message: 'Error al autenticar al usuario' });
    }
  };



  export { authenticateUser };