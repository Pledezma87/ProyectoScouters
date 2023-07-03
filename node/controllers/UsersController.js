import User from '../models/UsersModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }


        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'El email ya está en uso' });
        }

        // Validar la contraseña usando la expresión regular definida en el esquema
        if (!PWD_REGEX.test(password)) {
            return res.status(400).json({
                message: 'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial, y tener entre 8 y 24 caracteres.'
            });
        }

        const newUser = new User({ name, email, password, role });
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashedPassword;

        const userCreate = await newUser.save();

        if (userCreate) {
            const token = jwt.sign(
                { userId: userCreate._id, username: userCreate.name },
                'secret-token' // Reemplaza con tu secreto para el token
            );

            return res.status(201).json({ message: 'Usuario registrado correctamente', token });
        }

        return res.status(500).json({ message: 'Error al registrar el usuario' });
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            return res.status(400).json({ message: 'El usuario no existe' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { userId: existingUser._id, username: existingUser.name },
            'abc123' // Reemplaza con tu secreto para el token
        );

        res.status(200).json({ token });
        console.log(token)
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

//Actualizar un registro
const UpdateRegister = async (req, res) => {
    try {
        const id = req.params.id
        await User.updateOne({ _id: id }, req.body).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}



export { registerUser, loginUser, UpdateRegister };