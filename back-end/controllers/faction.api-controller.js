import db from '../models/config.js';

/*****************************/

    // FACTION Requests

/*****************************/

async function createFaction(req, res) {

    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Unable to create empty Faction!'
        });
    }

    // Create the faction
    const faction = {
        name: req.body.name,
        image: req.body.image,
    };

    // Save faction
    try {
        const fact = await db.db.faction.create(faction);
        res.status(200).send(fact);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Faction."
        });
    }
 
};

async function findAllFactions(req, res) {

    // Find all factions
    try {
        const factions = await db.db.faction.findAll();
        res.status(200).send(factions);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Some error occurred while finding all the Factions."
        });
    }

};

async function findFaction(req, res) {

    console.log('received get result with id:',req.params['id']);

    // Find faction by id
    try {
        console.log(db.db);
        const factions = await db.db.faction.findByPk(req.params['id']);
        res.status(200).send(factions);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Some error occurred while finding all the Factions."
        });
    }
};

const updateFaction = () => {


};

const deleteFaction = () => {

};


export { 
    createFaction,
    findAllFactions,
    findFaction,
    updateFaction,
    deleteFaction
}