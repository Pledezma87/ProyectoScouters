import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const informSchema = new Schema(
  {
    PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel' },
    habilidades: [
      {
        Disparo: { type: Number },
        Pase: { type: Number },
        Regate: { type: Number },
        Cabeza: { type: Number },
        Media: { type: Number }
      }
    ]
  },
  { collection: 'informs' }
);

export default mongoose.model('InformModel', informSchema);
