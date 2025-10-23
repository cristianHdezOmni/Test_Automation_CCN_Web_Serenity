import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';

export class SelectFiscalReceipt {
    static yes() {
        return Task.where(`#actor selects "Yes" for fiscal receipt`,
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.fiscalReceiptYes),
            Wait.until(PageElement.located(By.xpath(PaymentPage.fiscalReceiptYes)), isVisible()),
            PageElement.located(By.xpath(PaymentPage.fiscalReceiptYes)).click(),
            Interaction.where(`#actor confirms fiscal receipt selection`, () => {
                console.log('✅ Se seleccionó "Sí" en el comprobante fiscal.');
            }),
            Wait.for(Duration.ofSeconds(1))
        );
    }

    static no() {
        return Task.where(`#actor selects "No" for fiscal receipt`,
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.fiscalReceiptNo),
            Wait.until(PageElement.located(By.xpath(PaymentPage.fiscalReceiptNo)), isVisible()),
            Wait.for(Duration.ofSeconds(3)),
            PageElement.located(By.xpath(PaymentPage.fiscalReceiptNo)).click(),
            Interaction.where(`#actor confirms fiscal receipt selection`, () => {
                console.log('✅ Se seleccionó "No" en el comprobante fiscal.');
            }),
            Wait.for(Duration.ofSeconds(1))
        );
    }
}