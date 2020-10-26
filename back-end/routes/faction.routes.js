import { 
    createFaction,
    findAllFactions,
    findFaction,
    updateFaction,
    deleteFaction
} from '../controllers/faction.api-controller.js';
import express from 'express';

var router = express.Router();

// Create new Faction
router.post('/', createFaction);

router.get('/', findAllFactions);

router.get('/:id', findFaction);

router.put('/:id', updateFaction);

router.delete('/:id', deleteFaction);

export { router as factionRouter };