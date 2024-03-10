const express = require('express');
const router = express.Router();
const filterEntities = require('./entities/filterEntities');
const mergeEntities = require('./entities/mergeEntities');

function createRuotes(priorities) {
    router.post('/merge', (req, res) => {
        try {
            let filtered = filterEntities(req.body, priorities);
            let mergedRes = mergeEntities(req.body, filtered);
            res.status(200).json(mergedRes);
        } catch (error) {
            res.status(500).json(error);
        }
    });
    return router;
}

module.exports = createRuotes;



