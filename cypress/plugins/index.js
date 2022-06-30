/// <reference types="cypress"

const cucumber = require('cypress-cucumber-preprocessor').default;
const _ = require('lodash');
const del = require('del');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  // on("after:spec", (spec, results) => {
  //   if (results && results.video) {
  //     // Do we have failures for any retry attempts?
  //     const failures = _.some(results.tests, (test) => {
  //       return _.some(test.attempts, { state: "failed" });
  //     });
  //     if (!failures) {
  //       // delete the video if the spec passed and no tests retried
  //       return del(results.video);
  //     }
  //   }
  // });
};
