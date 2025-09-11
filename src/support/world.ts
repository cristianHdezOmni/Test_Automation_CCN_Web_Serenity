

import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium } from 'playwright';
import { Before, After, setWorldConstructor } from '@cucumber/cucumber';


export class CustomWorld {
  actor: any;
}

setWorldConstructor(CustomWorld);

Before({ timeout: 40000 }, async function () {
    // 🎭 Configuración del navegador basada en variable de entorno
    //const headless = process.env.HEADLESS === 'true' || false;
    const headless = process.env.HEADLESS !== 'false';
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

After(async function () {
    if (this.cleanup) {
        await this.cleanup();
    }
});

