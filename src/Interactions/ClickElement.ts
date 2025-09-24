// interactions/ClickElement.ts
import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';
import { scrollToElement } from './ScrollToElement';

export async function clickElement(actor: Actor, locatorXpath: string, fieldName: string): Promise<void> {
  const page = BrowseTheWeb.as(actor);

  // Aseguramos que el elemento esté visible en viewport
  //await scrollToElement(actor, locatorXpath);

  const element = page.locator(`xpath=${locatorXpath}`);
  await element.click();

  console.log(`[${fieldName}] Se hizo clic en el elemento con XPath: ${locatorXpath}`);
}

export async function clickElementWithTimeout(actor: Actor, locatorXpath: string, fieldName: string, timeout: number = 5000): Promise<void> {
  const page = BrowseTheWeb.as(actor);

  // Aseguramos que el elemento esté visible en viewport
  await scrollToElement(actor, locatorXpath);

  const element = page.locator(`xpath=${locatorXpath}`);
  await element.waitFor({ state: 'visible', timeout });
  await element.click();

  console.log(`[${fieldName}] Se hizo clic en el elemento con XPath: ${locatorXpath}`);
}