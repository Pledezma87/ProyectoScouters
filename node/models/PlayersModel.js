import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
  {
    Nombre: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Género: { type: String, required: true },
    Avatar: {type: String, default:'default.png'},
    Estatura: { type: Number, required: true },
    Edad: { type: Number, required: true },
    Nacionalidad: { type: String, required: true },
    Posición: { type: String, required: true },
    PieBueno: { type: String, required: true },
    Club: { type: String },
    Rating: { type: Number},
    Created_At: {type: Date, default: Date.now}
  },
  { collection: 'players',versionKey: false}
);

export default mongoose.model('PlayersModel', PlayerSchema);