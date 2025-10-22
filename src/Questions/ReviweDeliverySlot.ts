import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible, PageElements } from '@serenity-js/web';
import { DeliveryInformationPage } from '../PageObject/DeliveryInformationPage';

export class ReviewDeliverySlot {
    public static readonly areSlotsDisplayed = () =>
        Question.about(`whether delivery slots are displayed`, async (actor: AnswersQuestions & UsesAbilities) => {
            const slotElement = PageElement.located(By.xpath(DeliveryInformationPage.availableHourSlot));
            await actor.answer(Wait.until(slotElement, isVisible()));
            const isElementVisible = await actor.answer(slotElement.isVisible());
            
            console.log(`Available delivery slots visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('Se encontraron slots de entrega disponibles.');
            }
            
            return isElementVisible;
        });

    public static readonly countAvailableSlots = () =>
        Question.about(`how many delivery slots are available`, async (actor: AnswersQuestions & UsesAbilities) => {
            const slotsElements = PageElements.located(By.xpath(DeliveryInformationPage.allAvailableHourSlots));
            const count = await actor.answer(slotsElements.count());
            
            console.log(`🔢 Slots disponibles encontrados: ${count}`);
            
            return count;
        });

    public static readonly isNoSlotsAvailableMessageDisplayed = () =>
        Question.about(`whether no slots available message is displayed`, async (actor: AnswersQuestions & UsesAbilities) => {
            const noSlotsElement = PageElement.located(By.xpath(DeliveryInformationPage.noAvailableHourSlot));
            await actor.answer(Wait.until(noSlotsElement, isVisible()));
            const isElementVisible = await actor.answer(noSlotsElement.isVisible());
            
            console.log(`No slots available message visible: ${isElementVisible}`);
            
            if (!isElementVisible) {
                throw new Error('No hay slots de entrega disponibles.');
            }
            
            return isElementVisible;
        });

    public static readonly isSlotSavedInQuote = () =>
        Question.about(`whether slot is saved in quote`, async (actor: AnswersQuestions & UsesAbilities) => {
            const timeElement = PageElement.located(By.xpath(DeliveryInformationPage.pickupTimeLabel));
            await actor.answer(Wait.until(timeElement, isVisible()));
            const savedTime = await actor.answer(timeElement.text());
            
            const normalizedTime = savedTime?.trim() || '';
            console.log(`Saved pickup time: ${normalizedTime}`);
            
            if (!normalizedTime || normalizedTime.length === 0) {
                throw new Error('La hora de recogida no se guardó en la cotización.');
            }
            
            return normalizedTime;
        });
}