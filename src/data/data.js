const { buildSchema } = require('graphql');

import factsData from '../mocks/facts.js';

// GraphQL schema
module.exports.schema = buildSchema(`
    type Query {
        fact(id: Int!): Fact
        facts(topic: String): [Fact]
    },
    type Fact {
        id: Int
        text: String,
        rating: Float
    }
`);

module.exports.getFact = function (args) {
    let id = args.id;
    return factsData.filter(fact => {
        return fact.id == id;
    })[0];
}

module.exports.getFacts = function (args) {
    if (args.rating) {
        let rating = args.rating;
        return factsData.filter(fact => fact.rating === rating);
    } else {
        return factsData;
    }
}