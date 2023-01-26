const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeInscription',

  exposes: {
    './InscriptionModule': './projects/mfe-inscription/src/app/inscription/inscription.module.ts',
    './InscriptionComponent': './projects/mfe-inscription/src/app/inscription/inscription.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
