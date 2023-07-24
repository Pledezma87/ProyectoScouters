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
 surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
  nif: {
    type: String,
    required: true
  },
  club: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
 city: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
 phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    // default:'user',
    immutable: true

  },
  active: {
    type:Number,
    default: 0,
  },

  confirmationToken: {
    type: String,
    default: '0'
  },
  confirmationTokenCreatedAt: {
    type: Date,
    default: null
  }

},




  { collection: 'users', versionKey: false }
);

const User = mongoose.model('User', userSchema);
export default User;