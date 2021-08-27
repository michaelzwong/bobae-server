import express from 'express';
import yelpClient from '../services/graphql/yelpClient';
import { searchTotalLocationsQuery, searchTopTenQuery } from '../services/graphql/queries';

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

locationsRouter.get('/topten', async (req, res, next) => {
    const { latitude, longitude, radius } = req.query;
    const variables = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        radius: parseFloat(radius)
    };
    console.log(req.query);

    try {
        const data = await yelpClient.request(searchTopTenQuery, variables);
        let businessArray = data["search"]["business"];
        res.status(200).json(businessArray);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default locationsRouter;
