import mongoose from 'mongoose'
const Schema = mongoose.Schema

const usersSchema = new Schema(
    {
        Nombre: {type:String, required:true}, 
        Apellidos:{type:String, required:true},
        Email: {type:String, required:true},
        Contraseña: {type:String, required:true}
        
        },

    {collection: 'users'}
)

export default mongoose.model('UsersModel', usersSchema )