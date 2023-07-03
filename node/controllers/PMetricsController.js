import InformModel from '../models/InformModel.js';
import PmetricsModel from '../models/PmetricsModel.js';

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


// Calcular la media de habilidades y la MediaGlobal y almacenarlas en la colección "player-metrics"
export const calculatePlayerMetrics = async (req, res) => {
  try {
    const informs = await InformModel.find({}); // Obtener todos los informes
    const playerMetrics = {};
    let totalMediaInforme = 0; // Variable para almacenar la suma de todas las MediaInforme

    // Calcular la media de habilidades para cada jugador y la suma de todas las MediaInforme
    informs.forEach((inform) => {
      const playerId = inform.PlayerId.toString();
      const habilidades = inform.habilidades[0];

      if (!playerMetrics[playerId]) {
        playerMetrics[playerId] = {
          Ofensiva: [],
          Tecnica: [],
          Movimiento: [],
          Potencia: [],
          Mentalidad: [],
          Defensa: [],
        };
      }

      playerMetrics[playerId].Ofensiva.push(habilidades.Ofensiva); 
      playerMetrics[playerId].Tecnica.push(habilidades.Tecnica);
      playerMetrics[playerId].Movimiento.push(habilidades.Movimiento);
      playerMetrics[playerId].Potencia.push(habilidades.Potencia);
      playerMetrics[playerId].Mentalidad.push(habilidades.Mentalidad);
      playerMetrics[playerId].Defensa.push(habilidades.Defensa);

      totalMediaInforme += inform.MediaInforme;
    });

    // Calcular la media de habilidades para cada jugador
    for (let playerId in playerMetrics) {
      const playerMetric = playerMetrics[playerId];

      const mediaOfensiva = calculateAverage(playerMetric.Ofensiva);
      const mediaTecnica = calculateAverage(playerMetric.Tecnica);
      const mediaMovimiento = calculateAverage(playerMetric.Movimiento);
      const mediaPotencia = calculateAverage(playerMetric.Potencia);
      const mediaMentalidad = calculateAverage(playerMetric.Mentalidad);
      const mediaDefensa = calculateAverage(playerMetric.Defensa);
      const existingPlayerMetric = await PmetricsModel.findOne({ PlayerId: playerId });

      if (existingPlayerMetric) {
        // Actualizar el documento existente con los nuevos valores
        existingPlayerMetric.Ofensiva = mediaOfensiva;
        existingPlayerMetric.Tecnica = mediaTecnica;
        existingPlayerMetric.Movimiento = mediaMovimiento;
        existingPlayerMetric.Potencia = mediaPotencia;
        existingPlayerMetric.Mentalidad = mediaMentalidad;
        existingPlayerMetric.Defensa = mediaDefensa;
        existingPlayerMetric.mediaGlobal = totalMediaInforme / informs.length; // Asignar la mediaGlobal

        await existingPlayerMetric.save();
      } else {
        // Crear un nuevo documento si no existe uno con el mismo PlayerId
        const newPlayerMetric = new PmetricsModel({
          PlayerId: playerId,
          Ofensiva: mediaOfensiva,
          Tecnica: mediaTecnica,
          Movimiento: mediaMovimiento,
          Potencia: mediaPotencia,
          Mentalidad: mediaMentalidad,
          Defensa: mediaDefensa,
          mediaGlobal: totalMediaInforme / informs.length, // Asignar la mediaGlobal
        });

        await newPlayerMetric.save();
      }
    }

    const totalInforms = informs.length;
    const mediaGlobal = totalMediaInforme / totalInforms; // Calcular la MediaGlobal
   
    // res.status(200).json({ message: "Medias de habilidades calculadas y almacenadas correctamente", mediaGlobal });
    console.log(mediaGlobal)
  } catch (error) {
    console.log(error)
    // res.status(500).json({ message: error.message });
  }
};

// Calcular el promedio de un conjunto de números
const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};