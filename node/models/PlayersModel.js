import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CardSchema = new Schema(
    {
        Nombre: {type:String},
        Apellidos:{type:String},
        Estatura: {type:Number},
        Edad: {type:Number},
        Nacionalidad: {type: String},
        Posición: {type: String},
        Rating: {type:Number, default:5}               
        },

    {collection: 'players'}
)

export default mongoose.model('PlayersModel', CardSchema )

