const glob = require('glob');
const fs = require('fs');
const featuresDir = 'cypress/integration';

module.exports = {
  getAllFeaturesAndTags() {
    const result = [];

    const files = glob.sync(featuresDir + '/**/*.feature');

    for (const file of files) {
      // This could be imrpoved so we don't get the whole file while we only need the first line
      const lines = fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean);

      let firstLine = '';
      for (let i = 0; i < lines.length; i++) {
        if (lines[i]) {
          firstLine = lines[i];
          break;
        }
      }

      result.push({
        name: file,
        tags: firstLine,
      });
    }

    return result;
  },
};
