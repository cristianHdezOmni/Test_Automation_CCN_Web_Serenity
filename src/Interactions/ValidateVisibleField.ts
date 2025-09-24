import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';
//import { scrollToElement } from './ScrollToElement';
import { scrollToElementCenter } from './ScrollToElement';


export async function validateVisibleField(actor: Actor, locatorXpath: string, fieldName: string): Promise<boolean> {
  await scrollToElementCenter(actor, locatorXpath);
  

  const page = BrowseTheWeb.as(actor);  
  const isVisible = await page.locator(`xpath=${locatorXpath}`).isVisible();

  console.log(`[${fieldName}] Visibilidad: ${isVisible ? 'OK' : 'FAIL'}`);

  return isVisible;
}
