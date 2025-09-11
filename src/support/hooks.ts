import { BeforeAll } from '@cucumber/cucumber';
import { configure } from '@serenity-js/core';
import * as path from 'path';

BeforeAll(() => {
    configure({
        crew: [
            [ '@serenity-js/serenity-bdd', {
                specDirectory: path.resolve(__dirname, '../spec'),
                reporter: {
                    includeAbilityDetails: true,
                },
            } ],
            [ '@serenity-js/core:ArtifactArchiver', {
                outputDirectory: path.resolve(__dirname, '../../target/site/serenity')
            } ],
        ],
    });
});
