import express from 'express';
import yelpClient from '../services/graphql/yelpClient';
import { searchTotalLocationsQuery } from '../services/graphql/queries';

const locationsRouter = express.Router();

locationsRouter.get('/', async (req, res, next) => {
    const { term, vicinity, limit } = req.query;

    if(!term) {
        return res.status(500).send('Parameter \'term\' is missing');
    }
    if(!vicinity) {
        return res.status(500).send('Parameter \'vicinity\' is missing');
    }

    const variables = {
        term: term,
        location: vicinity,
        limit: parseInt(limit) || 50
    };

    try {
        const data = await yelpClient.request(searchTotalLocationsQuery, variables);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

locationsRouter.get('/')

export default locationsRouter;
