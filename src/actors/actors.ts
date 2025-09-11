import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium } from 'playwright';

export const createActor = async (name: string) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  return actorCalled(name).whoCan(
    BrowseTheWebWithPlaywright.usingPage(page),
  );
};
