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
                    includeAbilityDetails: true,
                    requirementsDirectory: path.resolve(__dirname, '../Resource/features'),
                    requirementTypes: [
                        { name: 'capability', level: 0 },
                        { name: 'feature', level: 1 }                      
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
