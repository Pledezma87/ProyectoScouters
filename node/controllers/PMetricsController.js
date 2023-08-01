import InformModel from '../models/InformModel.js';
import PmetricsModel from '../models/PMetricsModel.js';
import PlayersModel from '../models/PlayersModel.js';

// Obtener los datos de la colección "player-metrics"
export const getPlayerMetrics = async (req, res) => {
  try {
    const playerMetrics = await PmetricsModel.find();
    res.json(playerMetrics);
  } catch (error) {
    console.error('Error al obtener los datos de la colección "player-metrics":', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

// Calcular la media de Media de calculatePlayerMetrics y la MediaGlobal y almacenarlas en la colección "player-metrics"
export const calculatePlayerMetrics = async (id) => {
  try {
    const informs = await InformModel.find({ PlayerId: id });

    const playerMetrics = {
      SkillsPrincipales: {
        ControlDelBalon: [],
        Disparo: [],
        Cabeza: [],
        Asociacion: [],
        PieDerecho: [],
        PieIzquierdo: [],
        PasesLargos: [],
        Dribling: [],
        Reflejos: [],
        Centros: [],
        mediaGlobalPrincipales: 0,
        totalMediaInforme: 0,
        informCount: 0,
      },
      SkillsTacticas: {
        Anticipacion: [],
        Colocacion: [],
        Concentracion: [],
        Contundencia: [],
        Desdoble: [],
        Desmarque: [],
        Posicionamientos: [],
        VisionDeJuego: [],
        mediaGlobalTacticas: 0,
        totalMediaInforme: 0,
        informCount: 0,
      },
      SkillsFisicas: {
        Agilidad: [],
        Flexibilidad: [],
        Fuerza: [],
        Potencia: [],
        Resistencia: [],
        Salto: [],
        Velocidad: [],
        mediaGlobalFisicas: 0,
        totalMediaInforme: 0,
        informCount: 0,
      },
    };

    let totalMediaInforme = 0;
    let totalInformes = 0;

    informs.forEach((inform) => {
      const playerId = inform.PlayerId.toString();
      const skillsPrincipales = inform.SkillsPrincipales[0];
      const skillsTacticas = inform.SkillsTacticas[0];
      const skillsFisicas = inform.SkillsFisicas[0];

      playerMetrics.SkillsPrincipales.ControlDelBalon.push(skillsPrincipales.ControlDelBalon);
      playerMetrics.SkillsPrincipales.Disparo.push(skillsPrincipales.Disparo);
      playerMetrics.SkillsPrincipales.Cabeza.push(skillsPrincipales.Cabeza);
      playerMetrics.SkillsPrincipales.Asociacion.push(skillsPrincipales.Asociacion);
      playerMetrics.SkillsPrincipales.PieDerecho.push(skillsPrincipales.PieDerecho);
      playerMetrics.SkillsPrincipales.PieIzquierdo.push(skillsPrincipales.PieIzquierdo);
      playerMetrics.SkillsPrincipales.PasesLargos.push(skillsPrincipales.PasesLargos);
      playerMetrics.SkillsPrincipales.Dribling.push(skillsPrincipales.Dribling);
      playerMetrics.SkillsPrincipales.Reflejos.push(skillsPrincipales.Reflejos);
      playerMetrics.SkillsPrincipales.Centros.push(skillsPrincipales.Centros);

      playerMetrics.SkillsTacticas.Anticipacion.push(skillsTacticas.Anticipacion);
      playerMetrics.SkillsTacticas.Colocacion.push(skillsTacticas.Colocacion);
      playerMetrics.SkillsTacticas.Concentracion.push(skillsTacticas.Concentracion);
      playerMetrics.SkillsTacticas.Contundencia.push(skillsTacticas.Contundencia);
      playerMetrics.SkillsTacticas.Desdoble.push(skillsTacticas.Desdoble);
      playerMetrics.SkillsTacticas.Desmarque.push(skillsTacticas.Desmarque);
      playerMetrics.SkillsTacticas.Posicionamientos.push(skillsTacticas.Posicionamientos);
      playerMetrics.SkillsTacticas.VisionDeJuego.push(skillsTacticas.VisionDeJuego);

      playerMetrics.SkillsFisicas.Agilidad.push(skillsFisicas.Agilidad);
      playerMetrics.SkillsFisicas.Flexibilidad.push(skillsFisicas.Flexibilidad);
      playerMetrics.SkillsFisicas.Fuerza.push(skillsFisicas.Fuerza);
      playerMetrics.SkillsFisicas.Potencia.push(skillsFisicas.Potencia);
      playerMetrics.SkillsFisicas.Resistencia.push(skillsFisicas.Resistencia);
      playerMetrics.SkillsFisicas.Salto.push(skillsFisicas.Salto);
      playerMetrics.SkillsFisicas.Velocidad.push(skillsFisicas.Velocidad);

      playerMetrics.SkillsPrincipales.totalMediaInforme += inform.MediaInforme;
      playerMetrics.SkillsPrincipales.informCount++;
      playerMetrics.SkillsTacticas.totalMediaInforme += inform.MediaInforme;
      playerMetrics.SkillsTacticas.informCount++;
      playerMetrics.SkillsFisicas.totalMediaInforme += inform.MediaInforme;
      playerMetrics.SkillsFisicas.informCount++;

      totalMediaInforme += inform.MediaInforme;
      totalInformes++;
    });
    let nprincipales
    let nfisicas
    let ntacticas
    let contador = 0;

    for (let metricType in playerMetrics) {
      const metric = playerMetrics[metricType];
      const playerId = id.toString();

      const mediaValues = Object.keys(metric).reduce((averageValues, skill) => {
        if (Array.isArray(metric[skill])) {
          averageValues[skill] = calculateAverage(metric[skill]);
        }
        return averageValues;
      }, {});
      // console.log("Hola")
      // console.log(mediaValues)
      const valuesArray = Object.values(mediaValues);

      let m = 0;
      let contm = 0;
      valuesArray.forEach(Value => {
        m = m + Value
        contm++
      });
      m = m / contm
      if (contador == 0) {
        nprincipales = m
      }
      if (contador == 1) {
        ntacticas = m
      } if (contador == 2) {
        nfisicas = m
      }
      contador++

      const mediaGlobal = metric.informCount > 0 ? metric.totalMediaInforme / metric.informCount : 0;
      mediaValues.mediaGlobal = m;
      const existingPlayerMetric = await PmetricsModel.findOne({ PlayerId: playerId });

      if (existingPlayerMetric) {
        existingPlayerMetric[metricType] = mediaValues;
        existingPlayerMetric.mediaGlobal = mediaGlobal;
        await existingPlayerMetric.save();
      } else {
        const newPlayerMetric = new PmetricsModel({
          PlayerId: playerId,
          [metricType]: mediaValues,
          mediaGlobal: mediaGlobal,
        });
        console.log("Estoy aqui")
        console.log(newPlayerMetric)
        await newPlayerMetric.save();
      }
    }
    // console.log("Estoy aqui")
    // console.log(nprincipales)
    // console.log(nfisicas)
    // console.log(ntacticas)
    const globalMediaGlobal = totalInformes > 0 ? totalMediaInforme / totalInformes : 0;

    try {
      const metricUpdated = await PlayersModel.updateOne({ _id: id }, { Rating: globalMediaGlobal });
      const globalmed = await PmetricsModel.updateOne({ PlayerId: id },
        {
          mediaGlobal: globalMediaGlobal,
        })
      // console.log(metricUpdated);
    } catch (error) {
      console.log(error);
    }

    console.log('Cálculo de métricas de jugador completado');
  } catch (error) {
    console.error('Error al calcular las métricas de jugador:', error);
  }
};

// Calcular el promedio de un arreglo de números
const calculateAverage = (array) => {
  const sum = array.reduce((a, b) => a + b, 0);
  const average = sum / array.length;
  return isNaN(average) ? 0 : average;
};
