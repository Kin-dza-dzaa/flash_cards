const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "@body-background": "#1a1a1a",
              "@layout-header-background": "#282828",
             },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
};