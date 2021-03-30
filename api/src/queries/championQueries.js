const db = require('../db/connection');
const Champion = require('../db/schema/champion');

const ezreal = new Champion({
    name: "Ezreal",
    alias: "the Prodigal Explorer",
    description: "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere.",
    role: "Marksman",
    abilities: {
        Passive: "Rising Spell Force",
        Q: "Mystic Shot",
        W: "Essence Flux",
        E: "Arcane Shift",
        R: "Trueshot Barrage"
    },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"
});

const addEzreal = async () => {
    await ezreal.save((err) => {
        if (err) console.log("An error occured", err);
    })
};

const getAllChampions = async (req, res) => {
    try {
        const result = await Champion.find({});
        console.log(result);
        res.json(result);
    } catch (e) {
        res.status(e.statuscode || 500);
        res.json({
            error: e.name,
            message: e.message,
            statusCode: e.statusCode || 500
        });
    }
};

module.exports = {
    addEzreal: addEzreal,
    getAllChampions: getAllChampions
}