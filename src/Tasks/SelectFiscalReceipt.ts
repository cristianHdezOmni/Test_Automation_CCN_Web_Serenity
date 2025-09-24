import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

export class SelectFiscalReceipt {
    static yes() {
        return Task.where(`#actor selects "Yes" for fiscal receipt`,
            Wait.until(PageElement.located(By.css(PaymentPage.fiscalReceiptYes)), isVisible()),
            PageElement.located(By.css(PaymentPage.fiscalReceiptYes)).click(),
            Interaction.where(`#actor confirms fiscal receipt selection`, () => {
                console.log('✅ Se seleccionó "Sí" en el comprobante fiscal.');
            }),
            Wait.for(Duration.ofSeconds(1))
        );
    }

    static no() {
        return Task.where(`#actor selects "No" for fiscal receipt`,
            Wait.until(PageElement.located(By.css(PaymentPage.fiscalReceiptNo)), isVisible()),
            PageElement.located(By.css(PaymentPage.fiscalReceiptNo)).click(),
            Interaction.where(`#actor confirms fiscal receipt selection`, () => {
                console.log('✅ Se seleccionó "No" en el comprobante fiscal.');
            }),
            Wait.for(Duration.ofSeconds(1))
        );
    }
}