import express from 'express';
import { createPlayer, getAllPlayers, getPlayer, updatePlayer, deletePlayer, avatar} from '../controllers/PlayerController.js'
const router = express.Router()

router.get('/', getAllPlayers)
router.get('/:id', getPlayer)
router.get("/avatar/:file", avatar);
router.post('/', createPlayer)
router.put('/:id', updatePlayer)
router.delete('/:id', deletePlayer)


export default router