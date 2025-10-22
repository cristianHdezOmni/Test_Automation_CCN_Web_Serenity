import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter} from "../Interactions/ScrollToElementCenter";

/**
 * ReviewAndPaymentMethod
 * Clase para validar la visibilidad de los datos de un método de pago (ejemplo: tarjeta VISA).
 */
export class ReviewAndPaymentMethod {
    /**
     * Valida que se muestre el título de la tarjeta (ej: VISA).
     */
    public static readonly cardTitle = () =>
        Question.about(`whether card title is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const titleElement = PageElement.located(By.xpath(PaymentPage.cardTitle));
            await actor.answer(Wait.until(titleElement, isVisible()));
            const isElementVisible = await actor.answer(titleElement.isVisible());
            
            console.log(`Card Title visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Card Title is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida que se muestre el número de la tarjeta enmascarado (ej: ****0007).
     */
    public static readonly maskedCardNumber = () =>
        Question.about(`whether masked card number is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const cardNumberElement = PageElement.located(By.xpath(PaymentPage.maskedCardNumber));
            await actor.answer(Wait.until(cardNumberElement, isVisible()));
            const isElementVisible = await actor.answer(cardNumberElement.isVisible());
            
            console.log(`Masked Card Number visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Masked Card Number is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida que se muestre la fecha de expiración de la tarjeta (ej: 05/2032).
     */
    public static readonly cardExpiration = () =>
        Question.about(`whether card expiration date is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const expirationElement = PageElement.located(By.xpath(PaymentPage.cardExpiration));
            await actor.answer(Wait.until(expirationElement, isVisible()));
            const isElementVisible = await actor.answer(expirationElement.isVisible());
            
            console.log(`Card Expiration Date visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Card Expiration Date is not visible');
            }
            
            return isElementVisible;
        });

    /**
     * Valida en conjunto todos los campos de la tarjeta.
     */
    public static readonly allCardDetails = () =>
        Question.about(`whether all card details are visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const titleElement = PageElement.located(By.xpath(PaymentPage.cardTitle));
            const cardNumberElement = PageElement.located(By.xpath(PaymentPage.maskedCardNumber));
            const expirationElement = PageElement.located(By.xpath(PaymentPage.cardExpiration));

            await actor.answer(Wait.until(titleElement, isVisible()));
            await actor.answer(Wait.until(cardNumberElement, isVisible()));
            await actor.answer(Wait.until(expirationElement, isVisible()));

            const titleVisible = await actor.answer(titleElement.isVisible());
            const cardNumberVisible = await actor.answer(cardNumberElement.isVisible());
            const expirationVisible = await actor.answer(expirationElement.isVisible());

            console.log(`Validando todos los detalles de la tarjeta:`);
            console.log(`  Card Title visible: ${titleVisible}`);
            console.log(`  Masked Card Number visible: ${cardNumberVisible}`);
            console.log(`  Card Expiration visible: ${expirationVisible}`);

            const allVisible = titleVisible && cardNumberVisible && expirationVisible;

            if (allVisible) {
                console.log(`✅ Todos los detalles de la tarjeta son visibles`);
            } else {
                console.log(`❌ No todos los detalles de la tarjeta son visibles`);
            }

            return allVisible;
        });

    /**
     * Valida que se muestre el contenedor principal de los métodos de pago.
     */
    public static readonly paymentMethodsVisible = () =>
        Question.about(`whether payment methods container is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            ScrollToElementCenter.to(PaymentPage.paymentMethods);
            const paymentMethodsElement = PageElement.located(By.xpath(PaymentPage.paymentMethods));
            await actor.answer(Wait.until(paymentMethodsElement, isVisible()));
            const isElementVisible = await actor.answer(paymentMethodsElement.isVisible());
            
            console.log(`Payment Methods container visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Payment Methods container is not visible');
            }
            
            return isElementVisible;
        });
}