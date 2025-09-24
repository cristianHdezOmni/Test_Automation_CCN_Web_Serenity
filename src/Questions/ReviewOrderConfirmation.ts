import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

export class ReviewOrderConfirmation {
    public static readonly confirmPaymentMessage = () =>
        Question.about(`whether payment confirmation message is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const messageElement = PageElement.located(By.css(PaymentPage.SUCCESS_MESSAGE));
            await actor.answer(Wait.until(messageElement, isVisible()));
            const isElementVisible = await actor.answer(messageElement.isVisible());
            
            console.log(`Payment confirmation message visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Payment confirmation message is not visible');
            }
            
            return isElementVisible;
        });

    public static readonly confirmOrderNumber = () =>
        Question.about(`whether order number is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const orderNumberElement = PageElement.located(By.css(PaymentPage.ORDER_NUMBER));
            await actor.answer(Wait.until(orderNumberElement, isVisible()));
            const isElementVisible = await actor.answer(orderNumberElement.isVisible());
            
            console.log(`Order number visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order number is not visible');
            }
            
            return isElementVisible;
        });
}