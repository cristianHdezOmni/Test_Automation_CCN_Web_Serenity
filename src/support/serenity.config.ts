// import { ConsoleReporter } from '@serenity-js/console-reporter';
// import SerenityBDDReporter from '@serenity-js/serenity-bdd';
// import { ArtifactArchiver } from '@serenity-js/core';


// export = {
//   crew: [
//     ConsoleReporter.withDefaultColourSupport(),

//   // ✅ Reporter con procesadores requeridos
//   // ✅ Reporter estándar
//   SerenityBDDReporter(),

//   // ✅ Archiver usando ruta por defecto
//   ArtifactArchiver.storingArtifactsAt('target/site/serenity'),
//   ],

//   // Playwright integration is handled via abilities in step definitions/hooks
// };

import { ConsoleReporter } from '@serenity-js/console-reporter';
import SerenityBDDReporter from '@serenity-js/serenity-bdd';
import { AfterStep, BeforeAll, Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { configure, ArtifactArchiver, actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium } from 'playwright';
import { TakeScreenshot } from '@serenity-js/web';
import * as path from 'path';

export class CustomWorld {
  actor: any;
}

setWorldConstructor(CustomWorld);

Before({ timeout: 30000 }, async function () {
    // 🎭 Configuración del navegador basada en variable de entorno
    const headless = process.env.HEADLESS === 'true' || false;
    //const headless = process.env.HEADLESS !== 'false';
    const browser = await chromium.launch({
        channel: 'chrome', // 👈 esto lanza Google Chrome real
        headless: headless     // 👀 configurable según el ambiente
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.actor = actorCalled('User').whoCan(
        BrowseTheWebWithPlaywright.usingPage(page)
    );

    // Ensure browser and context are closed after tests
    this.cleanup = async () => {
        await context.close();
        await browser.close();
    };
});

// Hook to clean up resources after each scenario

After({ timeout: 40000 },async function () {
    if (this.cleanup) {
        await this.cleanup();
    }
});

BeforeAll(() => {
    configure({
        crew: [
           ConsoleReporter.withDefaultColourSupport(),
           // ✅ Reporter con procesadores requeridos
           // ✅ Reporter estándar
           SerenityBDDReporter(),
           // ✅ Archiver usando ruta por defecto
           ArtifactArchiver.storingArtifactsAt('target/site/serenity'),
            [ '@serenity-js/serenity-bdd', {
                specDirectory: path.resolve(__dirname, '../Resource/features'),
                reporter: {
                    includeAbilityDetails: true,
                    requirementsDirectory: path.resolve(__dirname, '../Resource/features'),
                    requirementTypes: [
                        { name: 'epic', level: 0 },
                        { name: 'component', level: 1 },
                        { name: 'story', level: 2 }
                    ]
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

