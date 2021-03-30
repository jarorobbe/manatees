const express = require('express');
const router = express.Router();
const { addEzreal, getAllChampions } = require('../queries/championQueries');

router.post('/test', async (req, res) => {
    try {
        await addEzreal();
    } catch (e) {
        res.status(e.statuscode || 500);
        res.json({
            error: e.name,
            message: e.message,
            statusCode: e.statusCode || 500
        });
    }
    res.status(200);
});

router.get('/', async (req, res) => {
    await getAllChampions(req, res);
});

module.exports = router;