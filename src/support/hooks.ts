import { AfterStep, BeforeAll } from '@cucumber/cucumber';
import { configure } from '@serenity-js/core';
import { TakeScreenshot } from '@serenity-js/web';
import * as path from 'path';

BeforeAll(() => {
    configure({
        crew: [
            [ '@serenity-js/serenity-bdd', {
                specDirectory: path.resolve(__dirname, '../Resource/features'),
                reporter: {
                    // 👀 Muestra las habilidades de los actores en el reporte
                    includeAbilityDetails: true,
                    // 📂 Directorio donde están los .feature
                    requirementsDirectory: path.resolve(__dirname, '../Resource/features'),
                    // 🧩 Define la jerarquía de trazabilidad (business → feature → story → scenario)
                    requirementTypes: [
                        { name: 'capability', level: 0 },
                        { name: 'feature', level: 1 },
                        { name: 'story', level: 2 },                       
                    ],
                    
                    // 🔗 Enlaza tags de Jira, HU, etc.
                    // Ejemplo: @JIRA-123, @HU-45 se ven como requisitos
                    linkTemplate: 'https://tujira.com/browse/{0}',

                    // 📊 Muestra pasos omitidos en consola y reporte
                    showStepDetails: true,   
                    
                    // 🖼️ Incrusta capturas de pantalla directamente en el HTML
                    embedScreenshots: true,   

                    // ⏱️ Incluye tiempos exactos de cada escenario
                    includeExecutionTimes: true,  

                    // 📌 Permite que los tags personalizados se agrupen como "Requirements"
                    customTags: [ 'HU', 'JIRA', 'Epic' ]
                },
            } ],
            [ '@serenity-js/core:ArtifactArchiver', {
                outputDirectory: path.resolve(__dirname, '../../target/site/serenity')
            } ],
        ],
    });
});

AfterStep(async function () {
    if (this.actor) {
        await this.actor.attemptsTo(
            TakeScreenshot.of('step')
        );
    }
});
