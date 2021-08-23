import { GraphQLClient } from 'graphql-request';
import { yelpApiKey } from '../../config';

const yelpApiUrl = 'https://api.yelp.com/v3/graphql';

const yelpClient = new GraphQLClient(yelpApiUrl, {
    headers: {
        Authorization: `Bearer ${yelpApiKey}`
    },
});

export default yelpClient;
