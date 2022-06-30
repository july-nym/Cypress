#!/usr/bin/env node

const execSync = require('child_process').execSync;
const whiteLabelProducts = require('./modules/whiteLabelProducts');
const featureTags = require('./modules/featureTags');
const utils = require('./modules/utils');

const [, , ...args] = process.argv;

const paramKeyServer = '--server';
const paramKeyRecord = '--record';
const paramKeyTags = '--tags';
const paramKeyWlp = '--wlp';
const paramKeyReportTags = '--report-tags';
const paramKeyParallelGroup = '--parallel-group';

console.log('Running TRAVLR Automation...');

// If no parameter then show help
if (!args.length) {
  let msg = '';

  msg += '\nParameters';
  msg += '\n----------\n\n';

  msg += `${paramKeyRecord}\n`;
  msg += 'Whether to record the test result to the cypress dashboard. Test run in server will always be recorded.\n';
  msg += '\n';

  msg += `${paramKeyTags}="{string tag query}"\n`;
  msg +=
    'Filter the tests based on tags, can use and/or/not operator. More here: https://github.com/cucumber/common/tree/main/tag-expressions.\n';
  msg += '\n';

  msg += `${paramKeyWlp}="{string option}"\n`;
  msg += 'WLP to run the automation test against.\n';
  msg += `Options: [${whiteLabelProducts.getKeys().join(', ')}]\n`;
  msg += '\n';

  msg += `${paramKeyReportTags}="{string report tags, comma separated}"\n`;
  msg += 'Add tags to the running test result.\n';
  msg += '\n';

  msg += `${paramKeyParallelGroup}="{string group name}"\n`;
  msg += 'Enable parallel run in server and group the test.\n';
  msg += '\n';

  msg += '\nFeatures and Tags';
  msg += '\n----------------\n\n';
  for (const feature of featureTags.getAllFeaturesAndTags()) {
    msg += `${feature.name}\n`;
    msg += `${feature.tags}\n`;
    msg += '\n';
  }

  console.log(msg);
  return;
}

// SERVER
let serverArg = args.find((arg) => {
  return arg.startsWith(paramKeyServer);
});
const isServer = !!serverArg;

// RECORD
let recordArg = args.find((arg) => {
  return arg.startsWith(paramKeyRecord);
});
const recordParam = isServer || recordArg ? `--record` : '';

// TAGS
let tagsValue = '';
let tagsArg = args.find((arg) => {
  return arg.startsWith(paramKeyTags);
});
if (tagsArg) {
  tagsValue = utils.getArgValueString(tagsArg);
}
const tagsParam = tagsValue ? `-e "TAGS=${tagsValue}"` : '';

// WLP
let wlpValue = '';
let wlpArgVal = '';
let wlpArg = args.find((arg) => {
  return arg.startsWith(paramKeyWlp);
});
if (wlpArg) {
  wlpArgVal = utils.getArgValueString(wlpArg);
  wlpValue = whiteLabelProducts.getValue(wlpArgVal);
}
const wlpParam = wlpValue ? `--env baseUrl=${wlpValue}` : '';

// REPORT TAGS
let reportTagsArray = ['e2e', 'staging'];
let reportTagsArg = args.find((arg) => {
  return arg.startsWith(paramKeyReportTags);
});
if (reportTagsArg) {
  let reportTagsValue = utils.getArgValueString(reportTagsArg);
  reportTagsArray = reportTagsArray.concat(reportTagsValue.split(','));
}
if (wlpValue) {
  reportTagsArray.push(wlpArgVal);
}
const reportTagsParam = recordParam ? `--tag '${reportTagsArray.join(',')}'` : '';

// PARALLEL
let parallelGroupArgVal = '';
let parallelGroupArg = args.find((arg) => {
  return arg.startsWith(paramKeyParallelGroup);
});
if (parallelGroupArg) {
  parallelGroupArgVal = utils.getArgValueString(parallelGroupArg);
  parallelGroupArgVal = (parallelGroupArgVal || '').split(' ')[0];
}
const parallelParam =
  isServer && parallelGroupArgVal ? `--group ${parallelGroupArgVal} --parallel --ci-build-id $BUILD_TAG` : '';

// Run the full command
const command = `./node_modules/.bin/cypress-tags run --browser chrome --headless ${tagsParam} ${recordParam} ${parallelParam} ${reportTagsParam} ${wlpParam}`;
console.log(`Running: ${command}`);
execSync(command, { stdio: 'inherit' });
