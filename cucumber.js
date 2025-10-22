const path = require('path');

module.exports = {
  default: {
    requireModule: ['ts-node/register'], 
    require: [
      'src/StepDefinitions/**/*.ts',
      'src/support/**/*.ts',
    ],  
    paths: [
      'src/Resource/features/**/*.feature'
    ],
     format: [
      '@serenity-js/cucumber',
      'summary',
      //'progress-bar'     // 👈 añade salida visible en consola
    ],
    // formatOptions: {
    //   outputDirectory: 'target/site/serenity',
    //   specDirectory: 'src/Resource/features',
    //   reporter: {
    //     includeAbilityDetails: true,
    //     requirementsDirectory: path.resolve(__dirname, 'src/Resource/features'),
    //     requirementTypes: [
    //       { name: 'capability', level: 0 },
    //       { name: 'feature', level: 1 },
    //       { name: 'story', level: 2 },
    //     ],
    //     showStepDetails: true,
    //     embedScreenshots: true,
    //     includeExecutionTimes: true,
    //   }
    // },
    //publishQuiet: true, // 👈 evita logs innecesarios en CI/CD
    // Configuración de tags
    //tags: process.env.TAGS || '@checkoutIII' // Por defecto ejecuta solo @smoke
  }
};