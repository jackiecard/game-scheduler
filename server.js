const express = require('express');
const expressGraphQL = require('express-graphql');

import data from './src/data/data.js';

let root = {
    fact: data.getFact,
    facts: data.getFacts
};

let app = express();

app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Allow', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}, expressGraphQL({
        schema: data.schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));