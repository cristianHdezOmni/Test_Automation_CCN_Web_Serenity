import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';


/**
 * Task: Seleccionar tarjeta de crédito y confirmar
 */
export class SelectCreditCardTask {
    static withBalance() {
        Wait.for(Duration.ofSeconds(8))
        return Task.where(`#actor selects credit card with balance`,
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.creditCardWithBalanceRadio),
            Wait.until(PageElement.located(By.xpath(PaymentPage.creditCardWithBalanceRadio)), isVisible()),
            PageElement.located(By.xpath(PaymentPage.creditCardWithBalanceRadio)).click(),
            Interaction.where(`#actor logs card selection`, () => {
                console.log('✅ Seleccionada tarjeta Visa ending in 0059');
            }),
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.confirmButton),
            Wait.until(PageElement.located(By.xpath(PaymentPage.confirmButton)), isVisible()),
            Wait.for(Duration.ofSeconds(5)),
            PageElement.located(By.xpath(PaymentPage.confirmButton)).click(),
            Interaction.where(`#actor confirms selection`, () => {
                console.log('✅ Confirmada selección de tarjeta con balance');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }

    static withoutBalance() {
        return Task.where(`#actor selects credit card without balance`,
            Wait.for(Duration.ofSeconds(3)),            
            ScrollToElementCenter.to(PaymentPage.creditCardWithoutBalanceRadio),
            Wait.until(PageElement.located(By.xpath(PaymentPage.creditCardWithoutBalanceRadio)), isVisible()),
            PageElement.located(By.xpath(PaymentPage.creditCardWithoutBalanceRadio)).click(),
            Interaction.where(`#actor logs card selection`, () => {
                console.log('✅ Seleccionada tarjeta Visa ending in 0007');
            }),
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.confirmButton),
            Wait.until(PageElement.located(By.xpath(PaymentPage.confirmButton)), isVisible()),
            PageElement.located(By.xpath(PaymentPage.confirmButton)).click(),
            Interaction.where(`#actor confirms selection`, () => {
                console.log('✅ Confirmada selección de tarjeta sin balance');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
}