const questionnaireService = require('resources/questionnaire/questionnaire.service');

async function handler(ctx) {
  ctx.body = await questionnaireService.findOne({ _id: ctx.params.id });
}

module.exports.register = (router) => {
  router.get('/:id', handler);
};
