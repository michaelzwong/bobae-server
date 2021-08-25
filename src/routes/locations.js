import express from 'express';
import yelpClient from '../services/graphql/yelpClient';
import { searchTotalLocationsQuery } from '../services/graphql/queries';

const locationsRouter = express.Router();

locationsRouter.get('/', async (req, res, next) => {
    const { term, vicinity, limit, offset } = req.query;
    const variables = {
        term: term,
        location: vicinity,
        limit: parseInt(limit),
        offset: parseInt(offset),
    };
    console.log(req.query);

    try {
        const data = await yelpClient.request(searchTotalLocationsQuery, variables);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default locationsRouter;
