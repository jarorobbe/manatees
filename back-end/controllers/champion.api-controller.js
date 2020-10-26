import db from '../models/config.js';
import { ChampionModel } from '../models/champion-model.js';

/*****************************/

    // CHAMPION Requests

/*****************************/

async function createChampion(req, res) {

    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Unable to create empty Champion!'
        });
    }

    // Create the champion
    const champion = {
        name: req.body.name,
        role: req.body.role,
        faction: req.body.faction,
        image: req.body.image,
    };

    // Save champion
    try {
        const champ = await db.db.champion.create(champion);
        res.status(200).send(champ);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Champion."
        });
    }
 
};

async function findAllChampions(req, res) {

    // Find all champions
    try {
        const champions = await db.db.champion.findAll();
        res.status(200).send(champions);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Some error occurred while finding all the Champions."
        });
    }
};

async function findChampion(req, res) {

    // Find champion by id
    try {
        const champions = await db.db.champion.findByPk(req.params['id']);
        res.status(200).send(champions);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Some error occurred while finding all the Champions."
        });
    }
};

const updateChampion = () => {


};

const deleteChampion = () => {

};


export { 
    createChampion,
    findAllChampions,
    findChampion,
    updateChampion,
    deleteChampion
}