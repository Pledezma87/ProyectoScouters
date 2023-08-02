import mongoose from "mongoose";

const Schema = mongoose.Schema;

const informSchema = new Schema(
  {
    PlayerId: {
      type: Schema.Types.ObjectId,
      ref: "PlayersModel",
      required: true,
    },
    SkillsPrincipales: [
      {
        ControlDelBalon: { type: Number, required: true },
        Disparo: { type: Number, required: true },
        Cabeza: { type: Number, required: true },
        Asociacion: { type: Number, required: true },
        PieDerecho: { type: Number},
        PieIzquierdo: { type: Number },
        PasesLargos: { type: Number, required: true },
        Dribling: { type: Number, required: true },
        Reflejos: { type: Number, required: true },
        Centros: { type: Number, required: true },
        MediaInforme: { type: Number},
      },
    ],
    SkillsTacticas: [
      {
        Anticipacion: { type: Number, required: true },
        Colocacion: { type: Number, required: true },
        Concentracion: { type: Number, required: true },
        Contundencia: { type: Number, required: true },
        Desdoble: { type: Number, required: true },
        Desmarque: { type: Number, required: true},
        Posicionamientos: { type: Number, required: true },
        VisionDeJuego: { type: Number, required: true},
        MediaInforme: { type: Number },
      },
    ],
    SkillsFisicas: [
      {
        Agilidad: { type: Number, required: true },
        Flexibilidad: { type: Number, required: true },
        Fuerza: { type: Number, required: true },
        Potencia: { type: Number, required: true },
        Resistencia: { type: Number, required: true },
        Salto: { type: Number, required: true },
        Velocidad: { type: Number, required: true },
        MediaInforme: { type: Number},
      }
    ],
    MediaInforme: { type: Number },
    Texto: { type: String },
    Created_At: { type: Date, default: Date.now },
 
  },
  { collection: "informs", versionKey: false }
);


informSchema.pre('save', function (next) {
  const SkillsPrincipales = this.SkillsPrincipales[0]; // Accede a la primera habilidad del array SkillsPrincipales
  const sumaSkillsPrincipales =
    SkillsPrincipales.ControlDelBalon +
    SkillsPrincipales.Disparo +
    SkillsPrincipales.Cabeza +
    SkillsPrincipales.Asociacion +
    SkillsPrincipales.PieDerecho +
    SkillsPrincipales.PieIzquierdo +
    SkillsPrincipales.PasesLargos +
    SkillsPrincipales.Dribling +
    SkillsPrincipales.Reflejos +
    SkillsPrincipales.Centros;
  SkillsPrincipales.MediaInforme = sumaSkillsPrincipales / 10;

  const SkillsTacticas = this.SkillsTacticas[0]; // Accede a la primera habilidad del array SkillsTacticas
  const sumaSkillsTacticas =
    SkillsTacticas.Anticipacion +
    SkillsTacticas.Colocacion +
    SkillsTacticas.Concentracion +
    SkillsTacticas.Contundencia +
    SkillsTacticas.Desdoble +
    SkillsTacticas.Desmarque +
    SkillsTacticas.Posicionamientos +
    SkillsTacticas.VisionDeJuego;
  SkillsTacticas.MediaInforme = sumaSkillsTacticas / 8;

  const SkillsFisicas = this.SkillsFisicas[0]; // Accede a la primera habilidad del array SkillsFisicas
  const sumaSkillsFisicas =
    SkillsFisicas.Agilidad +
    SkillsFisicas.Flexibilidad +
    SkillsFisicas.Fuerza +
    SkillsFisicas.Potencia +
    SkillsFisicas.Resistencia +
    SkillsFisicas.Salto +
    SkillsFisicas.Velocidad;
  SkillsFisicas.MediaInforme = sumaSkillsFisicas / 7;

  this.MediaInforme = (SkillsPrincipales.MediaInforme + SkillsTacticas.MediaInforme + SkillsFisicas.MediaInforme) / 3;

  next();
});

export default mongoose.model("InformModel", informSchema)