// const path = require('path');   // 👈 Importa path

// module.exports = {
//   default: {
//     requireModule: ['ts-node/register'], 
//     require: [
//       'src/StepDefinitions/**/*.ts',
//       'src/support/**/*.ts',
//     ],  
//     paths: [
//       //'src/Resource/features/**/*.feature'
//       path.resolve(__dirname, '../Resource/features/**/*.feature'),
//     ],
//      format: [
//       '@serenity-js/cucumber',
//       'summary',
//       'progress-bar'     // 👈 añade salida visible en consola
//     ],
//     //publishQuiet: true, // 👈 evita logs innecesarios en CI/CD
//     // Configuración de tags
//     tags: process.env.TAGS || '@Regresion' // Por defecto ejecuta solo @smoke
//   }
// };

const path = require('path');

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/StepDefinitions/**/*.ts',
      'src/support/**/*.ts',
    ],
    paths: [
      path.resolve(__dirname, 'src/Resource/features/**/*.feature'),
    ],
    format: [
      '@serenity-js/cucumber',
      'summary',
      'progress-bar',
    ],
    formatOptions: {
      outputDirectory: path.resolve(__dirname, 'target/site/serenity'),
      specDirectory: path.resolve(__dirname, 'src/Resource/features'),
    },
    tags: process.env.TAGS || '@Regresion',   // 👈 por defecto corre @Regresion
    publishQuiet: true,                       // 👈 evita logs innecesarios en CI/CD
  }
};
