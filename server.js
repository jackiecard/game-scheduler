import express from 'express';
import expressGraphQL from 'express-graphql';
import connect from 'connect';
import serveStatic from 'serve-static';
import gameScheduler from './src/schema/gameScheduler.js';

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
    schema: gameScheduler.schema,
    rootValue: gameScheduler.root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

connect().use(serveStatic(`${__dirname}/dist`)).listen(8080, () => console.log('Server running on 8080...'));