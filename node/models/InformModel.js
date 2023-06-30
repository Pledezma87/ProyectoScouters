import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const informSchema = new Schema(
  {
    PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel', required: true },
    habilidades: [
      {
        Ofensiva: { type: Number, required: true },
        Tecnica: { type: Number, required: true },
        Movimiento: { type: Number, required: true },
        Potencia: { type: Number, required: true },
        Mentalidad: { type: Number, required: true },
        Defensa: { type: Number, required: true },
        Texto: { type: String, required: true }
      }
    ],
    MediaInforme: { type: Number },
    Created_At: {type: Date, default: Date.now}
  },
  { collection: 'informs' }
);

informSchema.pre('validate', function (next) {
  const habilidades = this.habilidades[0]; // Accede a la primera habilidad del array habilidades

  if (isNaN(habilidades.Ofensiva) || isNaN(habilidades.Tecnica)
    || isNaN(habilidades.Movimiento) || isNaN(habilidades.Potencia)
    || isNaN(habilidades.Mentalidad) || isNaN(habilidades.Defensa)) {
    return next(new Error('Los valores de habilidades deben ser numéricos'));
  }
  next();
});
informSchema.pre('save', function (next) {
  const habilidades = this.habilidades[0]; // Accede a la primera habilidad del array habilidades
  const sumaHabilidades = habilidades.Ofensiva + habilidades.Tecnica + habilidades.Movimiento + habilidades.Potencia + habilidades.Mentalidad + habilidades.Defensa;
  this.MediaInforme = sumaHabilidades / 6;
  next();
});

export default mongoose.model('InformModel', informSchema);
