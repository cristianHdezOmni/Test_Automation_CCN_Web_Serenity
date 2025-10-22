import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter} from "../Interactions/ScrollToElementCenter";

export class SelectPaymentMethod {
    static toDisplayTheList() {
        Wait.for(Duration.ofSeconds(7))
        return Task.where(`#actor selects payment method to display the list`,            
            ScrollToElementCenter.to(PaymentPage.paymentMethodToggle),
            //Wait.until(PageElement.located(By.xpath(PaymentPage.paymentMethodToggle)), isVisible()),
            PageElement.located(By.xpath(PaymentPage.paymentMethodToggle)).click(),
           // Wait.until(PageElement.located(By.xpath(PaymentPage.editPaymentMethod)), isVisible()),
            ScrollToElementCenter.to(PaymentPage.editPaymentMethod),
            Wait.for(Duration.ofSeconds(5)),
            PageElement.located(By.xpath(PaymentPage.editPaymentMethod)).click(),
            Interaction.where(`#actor confirms payment method list display`, () => {
                console.log('✅ Lista de métodos de pago desplegada.');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
}