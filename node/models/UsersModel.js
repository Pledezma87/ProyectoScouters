// import mongoose from 'mongoose'
// const Schema = mongoose.Schema

// const usersSchema = new Schema(
//     {
//         Nombre: {type:String, required:true}, 
//         Apellidos:{type:String, required:true},
//         Email: {type:String, required:true},
//         Contraseña: {type:Number, required:true}    
//         },

//     {collection: 'users'}
// )

// export default mongoose.model('UsersModel', usersSchema )







// import mongoose from "mongoose";
// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// // const passwordValidator = (value) => {
// //     return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);
// // };

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     validate: {
//       validator: USER_REGEX,
//       message: 'El nombre debe contener entre 3  y 23 carácteres, con al menos una letra mayúscula'
//     }
//   },
 
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//     validate: {
//       validator: PWD_REGEX,
//       message: 'La contraseña debe contener entre 8 y 24 carácteres, con al menos una letra y un número'
//     }
//   },
//   email: {
//     type: String,
//     required: true
   
//   },
//   role: {
//     type: String,
//     default: 'user' // Rol por defecto para un nuevo usuario
//   }


// });

// const User=mongoose.model('User',userSchema)
// export default User







import mongoose from "mongoose";

const USER_REGEX = /^[a-zA-Z]+$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => USER_REGEX.test(value),
      message: 'El nombre solo puede contener letras, tanto minúsculas como mayúsculas.'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 240,
    validate: {
      validator: (value) => PWD_REGEX.test(value),
      message: 'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial, y tener entre 8 y 24 caracteres.'
    }
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);
export default User;




