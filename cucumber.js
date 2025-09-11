module.exports = {
  default: {
    requireModule: ['ts-node/register'], 
    require: [
      'src/StepDefinitions/**/*.ts',
      'src/support/**/*.ts',
    ],  
    paths: ['src/Resource/features/**/*.feature'],
     format: [
      '@serenity-js/cucumber',
      'summary',
      'progress-bar'     // 👈 añade salida visible en consola
    ],
    //publishQuiet: true, // 👈 evita logs innecesarios en CI/CD
    // Configuración de tags
    tags: process.env.TAGS || '@registration01' // Por defecto ejecuta solo @smoke
  }
};