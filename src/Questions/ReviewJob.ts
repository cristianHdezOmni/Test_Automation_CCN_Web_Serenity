import { Question, Wait, Duration, AnswersQuestions, UsesAbilities, Interaction } from '@serenity-js/core';
import { PageElement, By, isVisible, BrowseTheWeb } from '@serenity-js/web';
import { OrderDetailsPage } from '../PageObject/OrderDetailsPage';
import { Memory } from '../Utils/Memory';

export class ReviewJob {
    public static readonly isJobCreatedInInstaleap = () =>
        Question.about(`whether job is created in Instaleap`, async (actor: AnswersQuestions & UsesAbilities) => {
            await actor.answer(Wait.for(Duration.ofSeconds(6)));
            
            const orderNumber: string = Memory.recall<string>('orderNumber') || '';
            console.log(`🔍 Validando Job con Order Number: ${orderNumber}`);
            const orderValue = Memory.recall<string>('orderTotal') || '';
            console.log(`💲 Validando Job con Order Total: ${orderValue}`);

            const orderElement = PageElement.located(By.xpath(OrderDetailsPage.NUMBER_ORDER(orderNumber)));
            
            console.log(`✅ Job con Order Number ${OrderDetailsPage.NUMBER_ORDER(orderNumber)} está visible en Instaleap`);
            await actor.answer(Wait.until(orderElement, isVisible()));
            await actor.answer(orderElement.click());

            await actor.answer(Wait.for(Duration.ofSeconds(15)));

            return true;
        });

    public static readonly withCredentialsAndIsJobCreatedInInstaleap = (user: string, pass: string) =>
        Question.about(`whether job is created in Instaleap after login with credentials`, async (actor: AnswersQuestions & UsesAbilities) => {
            // Navigate to login page using Interaction for direct page access
            await actor.answer(
                Interaction.where(`#actor navigates to Instaleap login`, async () => {
                    const currentPage = await actor.abilityTo(BrowseTheWeb).currentPage();
                    await currentPage.navigateTo('https://staging-odin.instaleap.io/');
                })
            );

            // Login process using Serenity/JS PageElement approach
            const emailField = PageElement.located(By.id('email'));
            const continueButton = PageElement.located(By.xpath('button:has-text("Continuar")'));
            const passwordField = PageElement.located(By.xpath('input[name="password"]'));
            const submitButton = PageElement.located(By.xpath('button[type="submit"]'));

            await actor.answer(Wait.until(emailField, isVisible()));
            await actor.answer(emailField.enterValue(user));
            await actor.answer(continueButton.click());
            
            await actor.answer(Wait.until(passwordField, isVisible()));
            await actor.answer(passwordField.enterValue(pass));
            await actor.answer(submitButton.click());
            
            await actor.answer(Wait.for(Duration.ofSeconds(15)));
            console.log('✅ Login en Instaleap completado');

            await actor.answer(Wait.for(Duration.ofSeconds(6)));
            
            const orderNumber: string = Memory.recall<string>('orderNumber') || '';
            console.log(`🔍 Validando Job con Order Number: ${orderNumber}`);
            const orderValue: string = Memory.recall<string>('orderTotal') || '';
            console.log(`💲 Validando Job con Order Total: ${orderValue}`);

            const orderElement = PageElement.located(By.xpath(OrderDetailsPage.NUMBER_ORDER(orderNumber)));
            
            console.log(`✅ Job con Order Number ${OrderDetailsPage.NUMBER_ORDER(orderNumber)} está visible en Instaleap`);
            await actor.answer(Wait.until(orderElement, isVisible()));
            await actor.answer(orderElement.click());
            
            await actor.answer(Wait.for(Duration.ofSeconds(4)));

            // Verificar elementos del job
            const jobOrderNumberElement = PageElement.located(By.xpath(OrderDetailsPage.NUMBER_ORDER_DETAIL(orderNumber)));
            const orderValueElement = PageElement.located(By.xpath(OrderDetailsPage.ORDER_VALUE(orderValue)));

            console.log(`🔍 Validando Job con Order Number: ${OrderDetailsPage.NUMBER_ORDER_DETAIL(orderNumber)}`);
            const isVisibleOrderNumber = await actor.answer(jobOrderNumberElement.isVisible());

            console.log(`🔍 Validando Job con Order Value: ${OrderDetailsPage.ORDER_VALUE(orderValue)}`);
            const isVisibleOrderValue = await actor.answer(orderValueElement.isVisible());

            console.log('🔍 Validando visibilidad de elementos:', isVisibleOrderNumber, ' ', isVisibleOrderValue);

            return isVisibleOrderValue && isVisibleOrderNumber;
        });
}