const { buildSchema } = require('graphql');

import usersData from '../mocks/users.json';
import gamesData from '../mocks/games.json';

// GraphQL schema
module.exports.schema = buildSchema(`
    type Query {
        user(id: Int!): User,
        users(name: String): [User],
        game(id: Int!): Game,
        games(date: String): [Game]
    },
    type User {
        id: Int
        name: String
    },
    type Game {
        id: Int
        name: String
        date: String
        attendees: [User]
    }
`);

const getUser = function (args) {
    let id = args.id;
    return usersData.filter(user => {
        return user.id == id;
    })[0];
}

const getUsers = function (args) {
    if (args.name) {
        let name = args.name;
        return usersData.filter(fact => fact.name === name);
    } else {
        return usersData;
    }
}

const getGame = function (args) {
  let id = args.id;
  return gamesData.filter(game => {
    return game.id == id;
  })[0];
}

const getGames = function (args) {
  if (args.date) {
    let date = args.date;
    return gamesData.filter(game => game.date === date);
  } else {
    return gamesData;
  }
}

const root = {
  user: getUser,
  users: getUsers,
  game: getGame,
  games: getGames
};

module.exports.root = root;