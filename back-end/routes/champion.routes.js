import { 
    createChampion,
    findAllChampions,
    findChampion,
    updateChampion,
    deleteChampion
} from '../controllers/champion.api-controller.js';
import express from 'express';

var router = express.Router();

// Create new Champion
router.post("/", createChampion);

router.get("/", findAllChampions);

router.get('/:id', findChampion);

router.put('/:id', updateChampion);

router.delete('/:id', deleteChampion);

export { router as championRouter };