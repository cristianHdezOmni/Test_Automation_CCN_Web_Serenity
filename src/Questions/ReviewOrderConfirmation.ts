import { Question, Wait, AnswersQuestions, UsesAbilities, Duration } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';

export class ReviewOrderConfirmation {
    public static readonly confirmPaymentMessage = () =>
        Question.about(`whether payment confirmation message is visible`, async (actor: AnswersQuestions & UsesAbilities) => {

            // 🕒 Pausa inicial (6 segundos)
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);
                        
            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(PaymentPage.SUCCESS_MESSAGE).performAs(actor);

            const messageElement = PageElement.located(By.xpath(PaymentPage.SUCCESS_MESSAGE));
            await actor.answer(Wait.until(messageElement, isVisible()));
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);

            const isElementVisible = await actor.answer(messageElement.isVisible());
            
            console.log(`Payment confirmation message visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Payment confirmation message is not visible');
            }
            
            return isElementVisible;
        });

    public static readonly confirmOrderNumber = () =>
        Question.about(`whether order number is visible`, async (actor: AnswersQuestions & UsesAbilities) => {

             // 🕒 Pausa inicial (6 segundos)
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);
                        
            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(PaymentPage.SUCCESS_MESSAGE).performAs(actor);


            const orderNumberElement = PageElement.located(By.xpath(PaymentPage.ORDER_NUMBER));
            await actor.answer(Wait.until(orderNumberElement, isVisible()));
            
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);

            const isElementVisible = await actor.answer(orderNumberElement.isVisible());
            
            console.log(`Order number visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order number is not visible');
            }
            
            return isElementVisible;
        });
}