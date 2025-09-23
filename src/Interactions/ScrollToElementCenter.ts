import { Interaction, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { By, PageElement } from '@serenity-js/web';

export class ScrollToElementCenter {
    static to(selector: string) {
        return Interaction.where(`#actor scrolls to element center: ${selector}`, async (actor: AnswersQuestions & UsesAbilities) => {
            const element = PageElement.located(By.xpath(selector));
            const handle = await actor.answer(element.nativeElement());
            // Use 'any' for the element type to avoid TypeScript DOM type errors
            await (handle as any).evaluate((el: any) => {
                el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });
            });
        });
    }
}