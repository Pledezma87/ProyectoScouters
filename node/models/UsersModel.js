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







import mongoose from "mongoose";
const passwordValidator = (value) => {
    return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
 
  password: {
    type: String,
    required: true,
    minlength: 5,
    validate: {
      validator: passwordValidator,
      message: 'La contraseña debe contener 5 carácteres al menos una letra y un número'
    }
  },
  email: {
    type: String,
    required: true
   
  },
  role: {
    type: String,
    default: 'user' // Rol por defecto para un nuevo usuario
  }


});

const User=mongoose.model('User',userSchema)
export default User