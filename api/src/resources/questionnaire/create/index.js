const questionnaireService = require('resources/questionnaire/questionnaire.service');

const { QUESTIONNAIRE } = require('app.constants');

const { schoolProgramQuestions } = require('./data');

async function handler(ctx) {
  const { body } = ctx.request;

  if ((!body.questionnaireName || !body.answers)
      || body.questionnaireName !== QUESTIONNAIRE.SCHOOL_PROGRAM.NAME
      || QUESTIONNAIRE.SCHOOL_PROGRAM.ANSWERS_COUNT !== Object.keys(body.answers).length
  ) {
    ctx.throw(400, 'Invalid request');
  }

  const answersResult = schoolProgramQuestions.map((question, index) => question.answer === body.answers[index]);
  const result = answersResult.reduce((acc, curr) => {
    if (curr) {
      acc.correct += 1;
    } else {
      acc.wrong += 1;
    }

    return acc;
  }, { correct: 0, wrong: 0 });

  ctx.body = await questionnaireService.create({
    ...body,
    result: {
      ...result,
      score: (result.correct / schoolProgramQuestions.length),
    },
  });
}

module.exports.register = (router) => {
  router.post('/', handler);
};
