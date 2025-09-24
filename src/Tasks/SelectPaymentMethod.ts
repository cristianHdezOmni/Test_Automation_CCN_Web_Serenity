import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

export class SelectPaymentMethod {
    static toDisplayTheList() {
        return Task.where(`#actor selects payment method to display the list`,
            Wait.until(PageElement.located(By.css(PaymentPage.paymentMethodToggle)), isVisible()),
            PageElement.located(By.css(PaymentPage.paymentMethodToggle)).click(),
            Wait.until(PageElement.located(By.css(PaymentPage.editPaymentMethod)), isVisible()),
            PageElement.located(By.css(PaymentPage.editPaymentMethod)).click(),
            Interaction.where(`#actor confirms payment method list display`, () => {
                console.log('✅ Lista de métodos de pago desplegada.');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
}