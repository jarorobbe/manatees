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
            message: err.message || 'Some error occurred while creating the Faction.'
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
            message: err.message || 'Some error occurred while finding all the Factions.'
        });
    }

};

async function findFaction(req, res) {

    // Find faction by id
    try {
        const factions = await db.db.faction.findByPk(req.params['id']);
        res.status(200).send(factions);
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while finding the Faction with id ' + req.params['id'] + '.'
        });
    }
};

async function updateFaction(req, res) {

    // Update faction by id
    try {
        var faction = await db.db.faction.findByPk(req.params['id']);
        if (!faction) {
            res.status(500).send({
                message: 'Faction with id ' + req.params['id'] + ' not found.'
            });
        } else {
            await faction.update({
                name: req.body.name,
                image: req.body.image,
            });
            res.status(200).send(faction);
        }
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the Faction with id ' + req.params['id'] + '.'
        });
    }
};

async function deleteFaction(req, res) {

    // Delete faction by id
    try {
        await db.db.faction.destroy({
            where: {
                id: req.params['id']
            }
        });
        res.status(200).send({
            message: 'Successfully removed the Faction.'
        });
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the Faction with id ' + req.params['id'] + '.'
        });
    }

};


export { 
    createFaction,
    findAllFactions,
    findFaction,
    updateFaction,
    deleteFaction
}