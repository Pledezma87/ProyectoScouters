// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const pmetricsSchema = new Schema(
//   {
//     PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel' },
//     Ofensiva: { type: Number },
//     Tecnica: { type: Number},
//     Movimiento: { type: Number },
//     Potencia: { type: Number},
//     Mentalidad: { type: Number },
//     Defensa: { type: Number },
//     Created_At: {type: Date, default: Date.now},
//     mediaGlobal: { type: Number }
//   },
//   { collection: 'player-metrics' }
// );

// const PmetricsModel = mongoose.model('PmetricsModel', pmetricsSchema);

// export default PmetricsModel;




import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pmetricsSchema = new Schema(
  {
    PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel' },
    Ofensiva: { type: Number },
    Tecnica: { type: Number },
    Movimiento: { type: Number },
    Potencia: { type: Number },
    Mentalidad: { type: Number },
    Defensa: { type: Number },
    Created_At: { type: Date, default: Date.now },
    mediaGlobal: { type: Number }
  },
  { collection: 'player-metrics' }
);

// Redondear las medias de habilidades y la media global hacia números enteros
pmetricsSchema.pre('save', function (next) {
  this.Ofensiva = Math.round(this.Ofensiva);
  this.Tecnica = Math.round(this.Tecnica);
  this.Movimiento = Math.round(this.Movimiento);
  this.Potencia = Math.round(this.Potencia);
  this.Mentalidad = Math.round(this.Mentalidad);
  this.Defensa = Math.round(this.Defensa);
  this.mediaGlobal = Math.round(this.mediaGlobal);
  next();
});

const PmetricsModel = mongoose.model('PmetricsModel', pmetricsSchema);

export default PmetricsModel;

