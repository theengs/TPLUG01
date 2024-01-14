const commonConfig = require('./public/commonConfig');

module.exports = {
  ...commonConfig,
  themeConfig: {
    ...commonConfig.themeConfig,
    sidebar: [
      ['/','Quick start 🏠'],
      ['advanced/advanced','Advanced ✈️']
    ]
  }
}
