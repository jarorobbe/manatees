import { 
    createChampion,
    findAllChampions,
    findChampion,
    updateChampion,
    deleteChampion
} from '../controllers/api-controller.js';
import express from 'express';

var router = express.Router();

// Create new Champion
router.post("/", createChampion);

router.get("/", findChampion);

export { router as championRouter };