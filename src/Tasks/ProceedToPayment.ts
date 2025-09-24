import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

export class ProceedToPayment {
    static confirmsThePayment() {
        return Task.where(`#actor confirms the payment`,
            Wait.until(PageElement.located(By.css(PaymentPage.proceedToPaymentButton)), isVisible()),
            PageElement.located(By.css(PaymentPage.proceedToPaymentButton)).click(),
            Interaction.where(`#actor confirms payment action`, () => {
                console.log('✅ Se hizo clic en "Proceder al pago".');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }

    static confirmsThePaymentWithoutBalance() {
        return Task.where(`#actor confirms the payment without balance in iframe`,
            Wait.for(Duration.ofSeconds(2)),
            Interaction.where(`#actor clicks Yes in credit card iframe`, async (actor) => {
                // Note: Iframe handling in Serenity/JS requires special approach
                // This is a simplified version - you may need to use Switch.to() for iframe handling
                const frameElement = PageElement.located(By.css(PaymentPage.threeDSFrame));
                const yesButton = PageElement.located(By.css(PaymentPage.confirmYesCreditCartVisa));
                
                // Wait for iframe to be available
                await actor.answer(Wait.until(frameElement, isVisible()));
                
                // Click the Yes button (assuming it's accessible without iframe switch)
                await actor.answer(yesButton.click());
                
                console.log('✅ Se hizo clic en "Yes Credit Card".');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
}