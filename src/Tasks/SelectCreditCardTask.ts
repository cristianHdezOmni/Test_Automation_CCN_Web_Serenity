import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

/**
 * Task: Seleccionar tarjeta de crédito y confirmar
 */
export class SelectCreditCardTask {
    static withBalance() {
        return Task.where(`#actor selects credit card with balance`,
            Wait.until(PageElement.located(By.css(PaymentPage.creditCardWithBalanceRadio)), isVisible()),
            PageElement.located(By.css(PaymentPage.creditCardWithBalanceRadio)).click(),
            Interaction.where(`#actor logs card selection`, () => {
                console.log('✅ Seleccionada tarjeta Visa ending in 0059');
            }),
            Wait.until(PageElement.located(By.css(PaymentPage.confirmButton)), isVisible()),
            PageElement.located(By.css(PaymentPage.confirmButton)).click(),
            Interaction.where(`#actor confirms selection`, () => {
                console.log('✅ Confirmada selección de tarjeta con balance');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }

    static withoutBalance() {
        return Task.where(`#actor selects credit card without balance`,
            Wait.until(PageElement.located(By.css(PaymentPage.creditCardWithoutBalanceRadio)), isVisible()),
            PageElement.located(By.css(PaymentPage.creditCardWithoutBalanceRadio)).click(),
            Interaction.where(`#actor logs card selection`, () => {
                console.log('✅ Seleccionada tarjeta Visa ending in 0007');
            }),
            Wait.until(PageElement.located(By.css(PaymentPage.confirmButton)), isVisible()),
            PageElement.located(By.css(PaymentPage.confirmButton)).click(),
            Interaction.where(`#actor confirms selection`, () => {
                console.log('✅ Confirmada selección de tarjeta sin balance');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
}