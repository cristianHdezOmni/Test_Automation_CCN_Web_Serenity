import { Actor } from '../actors/Actor';
import { scrollToElement } from './ScrollToElement';
import { getNormalizedText } from './GetNormalizedText';

export async function validateField(actor: Actor, locatorXpath: string, expectedValue: string, fieldName: string): Promise<boolean> {
    
  await scrollToElement(actor, locatorXpath);

  const actualValue = await getNormalizedText(actor, locatorXpath);
  const isValid = actualValue.includes(expectedValue);

  console.log(`[${fieldName}] Esperado: "${expectedValue}" | Actual: "${actualValue}" | Resultado: ${isValid ? 'OK' : 'FAIL'}`);

  return isValid;
}
