import { AfterStep, BeforeAll } from '@cucumber/cucumber';
import { configure } from '@serenity-js/core';
import { TakeScreenshot } from '@serenity-js/web';
import * as path from 'path';

BeforeAll(() => {
    configure({
        crew: [
            '@serenity-js/console-reporter',
            [ '@serenity-js/serenity-bdd', {
                specDirectory: path.resolve(__dirname, '../Resource/features'),
                reporter: {
                    includeAbilityDetails: true, 
                    requirementsDirectory: path.resolve(__dirname, '../Resource/features'),
                    // 📌 Definir jerarquía de trazabilidad
                    requirementTypes: [
                        { name: 'capability', level: 0 },
                        { name: 'feature', level: 1 },
                        { name: 'story', level: 2 }
                    ],
                    // 📊 Opciones adicionales
                    showStepDetails: true,        // muestra Given/When/Then en reporte
                    embedScreenshots: true,       // incrusta capturas de pantalla
                    includeExecutionTimes: true,  // incluye métricas de tiempos                   
                },
            } ],
            [ '@serenity-js/core:ArtifactArchiver', {
                outputDirectory: path.resolve(__dirname, '../../target/site/serenity')
            } ],
            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' } ],
        ],
    });
});

AfterStep(async function () {
    if (this.actor) {
        await this.actor.attemptsTo(
           // TakeScreenshot.of('step')
        );
    }
});
