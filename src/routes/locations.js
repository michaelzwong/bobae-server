import express from 'express';
import yelpClient from '../services/graphql/yelpClient';
import { searchTotalLocationsQuery } from '../services/graphql/queries';

const locationsRouter = express.Router();

locationsRouter.get('/locations/total', async (req, res, next) => {
    const { term, vicinity, limit, offset } = req.query;
    const variables = {
        term: term,
        location: vicinity,
        limit: parseInt(limit),
        offset: parseInt(offset),
    };

    try {
        const data = await yelpClient.request(searchTotalLocationsQuery, variables);
        res.send(JSON.stringify(data));
    } catch (err) {
        res.status(500).send(err);
    }
});

export default locationsRouter;
