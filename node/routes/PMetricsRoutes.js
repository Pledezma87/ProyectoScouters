import express from 'express';
import { calculatePlayerMetrics, getPlayerMetrics } from '../controllers/PMetricsController.js';

const router = express.Router();

// Calcular y almacenar las medias de habilidades
router.post('/calculate', calculatePlayerMetrics)

// Obtener los datos de la colección "player-metrics"
router.get('/', getPlayerMetrics);


export default router;