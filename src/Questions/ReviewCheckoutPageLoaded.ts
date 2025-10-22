import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { CheckoutPage } from '../PageObject/CheckoutPage';

export class ReviewCheckoutPageLoaded {
    public static readonly status = () =>
        Question.about(`whether checkout page shipping form is loaded`, async (actor: AnswersQuestions & UsesAbilities) => {

             const shippingFormElement = PageElement.located(By.xpath(CheckoutPage.shippingForm));
            
            // Espera hasta que el elemento sea visible
            await actor.answer(
                Wait.until(shippingFormElement, isVisible())
            );
            
            // Ahora pregunta si realmente es visible
            const isElementVisible = await actor.answer(shippingFormElement.isVisible());
            console.log(`Shipping Form visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Checkout page shipping form is not visible');
            }
            
            return isElementVisible;
            
           
        });

    public static readonly paymentSectionVisible = () =>
        Question.about(`whether payment methods section is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const paymentMethodsElement = PageElement.located(By.xpath(CheckoutPage.paymentMethods));
            await actor.answer(Wait.until(paymentMethodsElement, isVisible()));
            const isElementVisible = await actor.answer(paymentMethodsElement.isVisible());
            
            console.log(`Payment Methods section visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Payment methods section is not visible');
            }
            
            return isElementVisible;
        });

    public static readonly reviewSectionVisible = () =>
        Question.about(`whether review order section is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const reviewOrderElement = PageElement.located(By.xpath(CheckoutPage.reviewOrderSection));
            await actor.answer(Wait.until(reviewOrderElement, isVisible()));
            const isElementVisible = await actor.answer(reviewOrderElement.isVisible());
            
            console.log(`Review Order section visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Review order section is not visible');
            }
            
            return isElementVisible;
        });
}