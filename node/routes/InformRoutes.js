import express from 'express';
import { createInform, getAllInforms, getInform, updateInform, deleteInform } from '../controllers/InformController.js'
const router = express.Router()

router.get('/', getAllInforms)
router.get('/:id', getInform)
router.post('/', createInform)
router.put('/:id', updateInform)
router.delete('/:id', deleteInform)


export default router




