import { Interaction, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { By, PageElement } from '@serenity-js/web';

/**
 * Screenplay Interaction for scrolling an element into the center of the viewport.
 * Usage: actor.attemptsTo(ScrollToElementCenter.byXpath('//button[@id="add-to-cart"]'))
 */
export class ScrollToElementCenter {
    static byXpath(xpath: string) {
        return Interaction.where(`#actor scrolls to element center: ${xpath}`, async (actor: AnswersQuestions & UsesAbilities) => {
            const element = PageElement.located(By.xpath(xpath));
            const handle = await actor.answer(element.nativeElement());
            await (handle as any).evaluate((el: any) => {
                el.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
            });
        });
    }

    static bySelector(selector: string) {
        return Interaction.where(`#actor scrolls to element center: ${selector}`, async (actor: AnswersQuestions & UsesAbilities) => {
            const element = PageElement.located(By.css(selector));
            const handle = await actor.answer(element.nativeElement());
            await (handle as any).evaluate((el: any) => {
                el.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
            });
        });
    }
}