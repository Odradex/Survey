const db = require('db');
const constants = require('app.constants');

const service = db.createService(constants.DATABASE_DOCUMENTS.QUESTIONNAIRES);

module.exports = service;
