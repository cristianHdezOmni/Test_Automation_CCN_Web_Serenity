module.exports = {
  default: {
    requireModule: ['ts-node/register'], 
    require: [
      'src/StepDefinitions/**/*.ts',
      'src/support/**/*.ts',
    ],  
    paths: ['src/Resource/features/**/*.feature'],
    format: ['@serenity-js/cucumber'],
    // Configuración de tags
    tags: process.env.TAGS || '@smoke' // Por defecto ejecuta solo @smoke
  }
};