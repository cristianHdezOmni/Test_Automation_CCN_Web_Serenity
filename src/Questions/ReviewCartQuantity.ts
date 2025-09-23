import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';

export class ReviewCartQuantity {
    public static readonly validateQuantity = (expectedQuantity: number) =>
        Question.about(`whether the cart quantity is ${expectedQuantity}`, async (actor: AnswersQuestions & UsesAbilities) => {
            const counter = PageElement.located(By.xpath(CartPage.cartCounterNumber));
            await actor.answer(Wait.until(counter, isVisible()));
            const quantityText = await actor.answer(counter.text());
            const currentQuantity = Number(quantityText?.trim() || '0');
            console.log(`Cantidad actual en el carrito: ${currentQuantity}`);
            if (currentQuantity !== expectedQuantity) {
                throw new Error(
                    `Cantidad en el carrito incorrecta. Esperada: ${expectedQuantity}, Obtenida: ${currentQuantity}`
                );
            }
            return currentQuantity;
        });
}