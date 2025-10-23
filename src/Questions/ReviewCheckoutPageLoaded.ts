import { Question, Wait, AnswersQuestions, UsesAbilities, Duration } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { CheckoutPage } from '../PageObject/CheckoutPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';

export class ReviewCheckoutPageLoaded {
     public static readonly status = () =>
        Question.about(`whether checkout page shipping form is loaded`, async (actor: AnswersQuestions & UsesAbilities) => {

            // Localizador del formulario de envío (shipping form)
            const shippingFormElement = PageElement.located(
                By.xpath(CheckoutPage.shippingForm)
            );

            // 🕒 Pausa inicial (6 segundos)
            await Wait.for(Duration.ofSeconds(6)).performAs(actor);

            // 🎯 Desplazar al formulario de envío
            await ScrollToElementCenter.to(CheckoutPage.shippingForm).performAs(actor);

            await Wait.until(shippingFormElement, isVisible()).performAs(actor); 

            // 🕒 Pequeña pausa adicional después del visible
            await Wait.for(Duration.ofSeconds(15)).performAs(actor);

            // 🔍 Verificar visibilidad real
            const isElementVisible = await shippingFormElement.isVisible().answeredBy(actor);
            console.log(`Shipping Form visible: ${isElementVisible}`);

            if (!isElementVisible) {
                throw new Error('❌ Checkout page shipping form is not visible or not rendered yet');
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



