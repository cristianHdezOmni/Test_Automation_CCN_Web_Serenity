module.exports = {
  default: {
    require: ['src/StepDefinitions/**/*.ts'],
    requireModule: ['ts-node/register'],    
    //paths: ['src/features/registration.feature'],
    paths: ['src/Resource/features/**/*.feature'],
    // Configuración de tags
    tags: process.env.TAGS || '@smoke' // Por defecto ejecuta solo @smoke
  }
};