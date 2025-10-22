import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { PaymentPage } from '../PageObject/PaymentPage';

export class ReviewAndPaymentDetails {
    public static readonly hasBillingAddress = (expectedName: string, expectedPhone: string, expectedRegion: string, expectedCountry: string) =>
        Question.about(`whether billing address matches expected values`, async (actor: AnswersQuestions & UsesAbilities) => {
            const nameElement = PageElement.located(By.xpath(PaymentPage.billingName));
            const phoneElement = PageElement.located(By.xpath(PaymentPage.billingPhone));
            const regionElement = PageElement.located(By.xpath(PaymentPage.billingRegion));
            const countryElement = PageElement.located(By.xpath(PaymentPage.billingCountry));

            await actor.answer(Wait.until(nameElement, isVisible()));
            await actor.answer(Wait.until(phoneElement, isVisible()));
            await actor.answer(Wait.until(regionElement, isVisible()));
            await actor.answer(Wait.until(countryElement, isVisible()));

            const actualName = await actor.answer(nameElement.text());
            const actualPhone = await actor.answer(phoneElement.text());
            const actualRegion = await actor.answer(regionElement.text());
            const actualCountry = await actor.answer(countryElement.text());

            console.log(`Validando dirección de facturación:`);
            console.log(`  Nombre - Esperado: "${expectedName}", Actual: "${actualName}"`);
            console.log(`  Teléfono - Esperado: "${expectedPhone}", Actual: "${actualPhone}"`);
            console.log(`  Región - Esperado: "${expectedRegion}", Actual: "${actualRegion}"`);
            console.log(`  País - Esperado: "${expectedCountry}", Actual: "${actualCountry}"`);

            const nameValid = actualName?.includes(expectedName) || false;
            const phoneValid = actualPhone?.includes(expectedPhone) || false;
            const regionValid = actualRegion?.includes(expectedRegion) || false;
            const countryValid = actualCountry?.includes(expectedCountry) || false;

            const allValid = nameValid && phoneValid && regionValid && countryValid;

            if (!allValid) {
                console.log(`❌ Validación de dirección de facturación falló`);
                if (!nameValid) console.log(`  - Nombre no válido`);
                if (!phoneValid) console.log(`  - Teléfono no válido`);
                if (!regionValid) console.log(`  - Región no válida`);
                if (!countryValid) console.log(`  - País no válido`);
            } else {
                console.log(`✅ Dirección de facturación válida`);
            }

            return allValid;
        });

    public static readonly hasDeliverySlot = () =>
        Question.about(`whether delivery slot information is visible`, async (actor: AnswersQuestions & UsesAbilities) => {
            const dayElement = PageElement.located(By.xpath(PaymentPage.deliveryDay));
            const timeElement = PageElement.located(By.xpath(PaymentPage.deliveryTime));

            await actor.answer(Wait.until(dayElement, isVisible()));
            await actor.answer(Wait.until(timeElement, isVisible()));

            const dayVisible = await actor.answer(dayElement.isVisible());
            const timeVisible = await actor.answer(timeElement.isVisible());

            console.log(`Validando slot de entrega:`);
            console.log(`  Día visible: ${dayVisible}`);
            console.log(`  Hora visible: ${timeVisible}`);

            const bothVisible = dayVisible && timeVisible;

            if (bothVisible) {
                console.log(`✅ Información de slot de entrega visible`);
            } else {
                console.log(`❌ Información de slot de entrega no visible completamente`);
            }

            return bothVisible;
        });
}