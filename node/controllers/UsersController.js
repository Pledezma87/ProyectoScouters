// import UsersModel from '../models/UsersModel.js';

// // Definir métodos para el CRUD 

// // Mostrar TODOS los usuarios

// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await UsersModel.find()
//         res.status(200).json(users)
//     } catch (error) {
//         res.json( {message: error.message})
//     }

// }

// // Mostrar UN usuario

// export const getUser = async (req, res) => {
//         try {
//             const id = req.params.id
//            await UsersModel.findById({_id:id}).then( (users)=>{
//                 res.status(200).json(users)
//             })
//             } catch (error) {
//             res.json( {message: error.message})  
//         }
// }
// // Crear un usuario

// export const createUser = async (req, res) => {
//     try {
//         await UsersModel.create(req.body)
//         res.status(200).json({
//             "message":"Usuario creado correctamente"
//         })
//     } catch (error) {
//         res.json( {message: error.message} ) 

//     }

// }

// // Actualizar un usuario
// export const updateUser = async (req, res) => {
//     try {
//         const id = req.params.id
//         await UsersModel.updateOne({_id:id}, req.body).then( res=> {
//             console.log(res)
//         })
//         res.status(200).json({
//             "message":"Usuario actualizado correctamente"
//         })
//     } catch (error) {
//         res.json( {message: error.message} ) 
//     }

// }
// // Eliminar un usuario
// export const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.id
//         await UsersModel.deleteOne({_id:id }).then( res=>{
//             console.log(res)
//         })
//         res.status(200).json({
//             "message":"Usuario eliminado correctamente"
//         })
//     } catch (error) {
//         res.json( {message: error.message} ) 
//     }

// }











// import User from '../models/UsersModel.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';//NPM I bcrypt


// // R E G I S T R O
// const registerUser = async (req, res) => {
//     try {
//         const { name, password, email } = req.body;
//         const existingUser = await User.findOne({ name });
//         if (existingUser) {
//             return res.status(400).json({ message: 'El usuario ya existe' });
//         }           //Verifica que el usuario existe 



//         //Crear un nuevo usuario
//         const newUser = new User({ name, password, email });
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
//         newUser.password = hashedPassword;

//         const userCreate = await newUser.save();
//         console.log(userCreate);
//         res.status(201).json({ message: 'Usuario registrado correctamente' });
//     } catch (error) {
//         console.error('Error al guardar el usuario:', error);
//         res.status(500).json({ message: 'Error al registrar el usuario' });
//     }
// };



// // L O G I N
// const loginUser = async (req, res) => {
//     try {
//         const { name, password } = req.body;
//         const existingUser = await User.findOne({ name });
//         if (!existingUser) {
//             return res.status(400).json({ message: 'El usuario no existe' });  //Verifica si el usuario existe 
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);//Verifica  si la constraseña es correcta
//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: 'Contraseña incorrecta' });
//         }

//         const token = jwt.sign(
//             { userId: existingUser._id, username: existingUser.name },
//             'secreto_del_token' // Genera el token de autenticación
//         );


//         res.status(200).json({ token });
//     } catch (error) {
//         res.status(500).json({ message: 'Error al iniciar sesión' });
//     }
// };

// export { registerUser, loginUser };














import User from '../models/UsersModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Validar la contraseña usando la expresión regular definida en el esquema
        if (!PWD_REGEX.test(password)) {
            return res.status(400).json({
                message: 'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial, y tener entre 8 y 24 caracteres.'
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        const newUser = new User({ name, email, password: hashedPassword });
        const userCreate = await newUser.save();
        console.log(userCreate);
        res.status(201).json({ message: 'Usuario registrado correctamente' });
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
            'secreto_del_token'
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

export { registerUser, loginUser };