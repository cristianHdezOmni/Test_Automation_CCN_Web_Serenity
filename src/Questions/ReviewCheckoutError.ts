import { Question, Wait, AnswersQuestions, UsesAbilities, Duration } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';

export class ReviewCheckoutError {
    public static readonly confirmMessageDeliveryTimeIsMandatory = (message: string) =>
        Question.about(`whether delivery time error message "${message}" is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const errorElement = PageElement.located(By.xpath(PaymentPage.deliveryTimeErrorMessage(message)));
            await actor.answer(Wait.until(errorElement, isVisible()));
            const isElementVisible = await actor.answer(errorElement.isVisible());
            
            console.log(`Delivery Time Error Message "${message}" visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error(`Delivery Time Error Message "${message}" is not visible`);
            }
            
            return isElementVisible;
        });

    public static readonly confirmMessageFiscalReceiptIsMandatory = (message: string) =>
        Question.about(`whether fiscal receipt error message "${message}" is visible`, async (actor: AnswersQuestions & UsesAbilities) => {

            // 🕒 Pausa inicial (6 segundos)
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);
                        
            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(PaymentPage.fiscalReceiptErrorMessage(message)).performAs(actor);


            const errorElement = PageElement.located(By.xpath(PaymentPage.fiscalReceiptErrorMessage(message)));
            await actor.answer(Wait.until(errorElement, isVisible()));
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);
            const isElementVisible = await actor.answer(errorElement.isVisible());
            
            console.log(`Fiscal Receipt Error Message "${message}" visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error(`Fiscal Receipt Error Message "${message}" is not visible`);
            }
            
            return isElementVisible;
        });

    public static readonly isVisibleFiscalReceiptErrorMessage = () =>
        Question.about(`whether fiscal receipt error message label is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            // 🕒 Pausa inicial (6 segundos)
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);
                        
            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(PaymentPage.labelfiscalReceiptErrorMessage).performAs(actor);

            const errorElement = PageElement.located(By.xpath(PaymentPage.labelfiscalReceiptErrorMessage));
            
            
            await actor.answer(Wait.until(errorElement, isVisible()));
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);

            const isElementVisible = await actor.answer(errorElement.isVisible());
            
            console.log(`Fiscal Receipt Error Message Label visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Fiscal Receipt Error Message Label is not visible');
            }
            
            return isElementVisible;
        });

    public static readonly confirmMessagePaymentDeclined = (message: string) =>
        Question.about(`whether payment declined error message "${message}" is visible`, async (actor: AnswersQuestions & UsesAbilities) => {

             // 🕒 Pausa inicial (15 segundos)
            await Wait.for(Duration.ofSeconds(15)).performAs(actor);
                        
            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(PaymentPage.paymentDeclinedErrorMessage(message)).performAs(actor);


            const errorElement = PageElement.located(By.xpath(PaymentPage.paymentDeclinedErrorMessage(message)));
            await actor.answer(Wait.until(errorElement, isVisible()));
            await Wait.for(Duration.ofSeconds(3)).performAs(actor);
            const isElementVisible = await actor.answer(errorElement.isVisible());
            
            console.log(`Payment Declined Error Message "${message}" visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error(`Payment Declined Error Message "${message}" is not visible`);
            }
            
            return isElementVisible;
        });
}