import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

/**
 * ReviewOrderSummary
 * Clase para validar la visibilidad de los elementos del resumen de compra.
 */
export class ReviewOrderSummary {
    /**
     * Valida que se muestre el título "Resumen de compra".
     */
    public static readonly summaryTitleVisible = () =>
        Question.about(`whether order summary title is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const titleElement = PageElement.located(By.css(PaymentPage.orderSummaryTitle));
            await actor.answer(Wait.until(titleElement, isVisible()));
            const isElementVisible = await actor.answer(titleElement.isVisible());
            
            console.log(`Order Summary Title visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order Summary Title is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida que se muestre el subtotal en el resumen.
     */
    public static readonly subtotalVisible = () =>
        Question.about(`whether order subtotal is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const subtotalElement = PageElement.located(By.css(PaymentPage.orderSubtotal));
            await actor.answer(Wait.until(subtotalElement, isVisible()));
            const isElementVisible = await actor.answer(subtotalElement.isVisible());
            
            console.log(`Order Subtotal visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order Subtotal is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida que se muestre el costo de envío en el resumen.
     */
    public static readonly shippingVisible = () =>
        Question.about(`whether order shipping cost is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const shippingElement = PageElement.located(By.css(PaymentPage.orderShipping));
            await actor.answer(Wait.until(shippingElement, isVisible()));
            const isElementVisible = await actor.answer(shippingElement.isVisible());
            
            console.log(`Order Shipping visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order Shipping is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida que se muestre el total en el resumen.
     */
    public static readonly totalVisible = () =>
        Question.about(`whether order total is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const totalElement = PageElement.located(By.css(PaymentPage.orderTotal));
            await actor.answer(Wait.until(totalElement, isVisible()));
            const isElementVisible = await actor.answer(totalElement.isVisible());
            
            console.log(`Order Total visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Order Total is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida todos los campos visibles en el resumen de compra.
     */
    public static readonly allSummaryDetails = () =>
        Question.about(`whether all order summary details are visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const titleElement = PageElement.located(By.css(PaymentPage.orderSummaryTitle));
            const subtotalElement = PageElement.located(By.css(PaymentPage.orderSubtotal));
            const shippingElement = PageElement.located(By.css(PaymentPage.orderShipping));
            const totalElement = PageElement.located(By.css(PaymentPage.orderTotal));

            await actor.answer(Wait.until(titleElement, isVisible()));
            await actor.answer(Wait.until(subtotalElement, isVisible()));
            await actor.answer(Wait.until(shippingElement, isVisible()));
            await actor.answer(Wait.until(totalElement, isVisible()));

            const titleVisible = await actor.answer(titleElement.isVisible());
            const subtotalVisible = await actor.answer(subtotalElement.isVisible());
            const shippingVisible = await actor.answer(shippingElement.isVisible());
            const totalVisible = await actor.answer(totalElement.isVisible());

            console.log(`Validando todos los detalles del resumen de compra:`);
            console.log(`  Summary Title visible: ${titleVisible}`);
            console.log(`  Subtotal visible: ${subtotalVisible}`);
            console.log(`  Shipping visible: ${shippingVisible}`);
            console.log(`  Total visible: ${totalVisible}`);

            const allVisible = titleVisible && subtotalVisible && shippingVisible && totalVisible;

            if (allVisible) {
                console.log(`✅ Todos los detalles del resumen de compra son visibles`);
            } else {
                console.log(`❌ No todos los detalles del resumen de compra son visibles`);
            }

            return allVisible;
        });
}