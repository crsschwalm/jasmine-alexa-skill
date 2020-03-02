'use strict';

const niceWords = require('./nice-words');

module.exports.luckyNumber = (event, context, callback) => {
  const phrase = niceWords[Math.floor(Math.random() * niceWords.length)];
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: phrase,
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};
