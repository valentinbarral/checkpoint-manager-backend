const { authenticate } = require('@feathersjs/authentication').hooks;

const getCheckpointDataFromRoute = require('../../hooks/get-checkpoint-data-from-route');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [getCheckpointDataFromRoute()],
    update: [getCheckpointDataFromRoute()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
