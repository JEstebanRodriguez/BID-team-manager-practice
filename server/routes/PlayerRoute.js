import { Router } from 'express'
import {
    deletePlayerById,
    getAllPlayers,
    getPlayerById,
    newPlayer,
    updatePlayer
} from '../controllers/PlayerController.js'
const router = Router()

router.get('/players', getAllPlayers)
router.post('/players/add', newPlayer)
router.get('/players/:_id', getPlayerById)
router.put('/players/edit/:_id', updatePlayer)
router.delete('/players/delete/:_id', deletePlayerById)

export default router