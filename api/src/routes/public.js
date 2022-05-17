const mount = require('koa-mount');

const questionnaireResource = require('resources/questionnaire/public');

module.exports = (app) => {
  app.use(mount('/questionnaires', questionnaireResource));
};
