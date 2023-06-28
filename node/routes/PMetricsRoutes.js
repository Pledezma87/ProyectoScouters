import express from 'express';
import { createMetric, getAllMetrics, getMetric, updateMetric, deleteMetric} from '../controllers/PMetricsController.js'
const router = express.Router()

router.get('/', getAllMetrics)
router.get('/:id', getMetric)
router.post('/', createMetric)
router.put('/:id', updateMetric)
router.delete('/:id', deleteMetric)


export default router