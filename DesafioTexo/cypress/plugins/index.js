const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  on('after:run', async (results) => {
    const report = await marge.create();
    marge.writeFile(report);
  });
};
