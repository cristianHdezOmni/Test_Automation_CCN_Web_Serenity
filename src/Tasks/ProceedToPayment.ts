
import { PaymentPage } from '../PageObject/PaymentPage';
import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, Click, isVisible, PageElement, Switch } from '@serenity-js/web';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';


export class ProceedToPayment {
    static confirmsThePayment() {
        return Task.where(`#actor confirms the payment`,
            Wait.for(Duration.ofSeconds(3)),
            ScrollToElementCenter.to(PaymentPage.proceedToPaymentButton),
            Wait.until(PageElement.located(By.xpath(PaymentPage.proceedToPaymentButton)), isVisible()),
            Wait.for(Duration.ofSeconds(12)),
            PageElement.located(By.xpath(PaymentPage.proceedToPaymentButton)).click(),
            Interaction.where(`#actor confirms payment action`, () => {
                console.log('✅ Se hizo clic en "Proceder al pago".');
            }),
            Wait.for(Duration.ofSeconds(3))
        );
    }
    
     static confirmsThePaymentWithoutBalance() {
        return Task.where(`#actor confirms the payment without balance in Azul iframe`,

            // 🕒 Espera inicial por estabilidad
            Wait.for(Duration.ofSeconds(15)),

            // 📜 Desplaza al iframe para asegurar visibilidad
            ScrollToElementCenter.to(PaymentPage.threeDSFrame),

            // 👀 Espera hasta que el iframe sea visible en el DOM
            Wait.until(
                PageElement.located(By.xpath(PaymentPage.threeDSFrame)),
                isVisible()
            ),

            // 🔄 Cambia el contexto al iframe
            Switch.to(PageElement.located(By.xpath(PaymentPage.threeDSFrame))).and(

                Task.where(`#actor clicks "Yes" inside Azul 3DS iframe`,

                    Wait.for(Duration.ofSeconds(15)),

                    // ⏳ Esperar hasta que el botón "Yes" esté visible
                    Wait.until(
                        PageElement.located(By.xpath(PaymentPage.confirmYesCreditCartVisa)),
                        isVisible()
                    ),

                    // ✅ Hacer clic en el botón "Yes"
                    Click.on(PageElement.located(By.xpath(PaymentPage.confirmYesCreditCartVisa))),

                    // 🪄 Log en consola
                    Interaction.where(`#actor logs confirmation`, actor => {
                        console.log('✅ Se hizo clic en "Yes Credit Card".');
                        return Promise.resolve();
                    })
                )
            ),

            // 🕒 Espera final para estabilizar el flujo
            Wait.for(Duration.ofSeconds(13))
        );
    }
}