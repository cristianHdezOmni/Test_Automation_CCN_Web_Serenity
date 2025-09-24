import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { DeliveryInformationPage } from '../PageObject/DeliveryInformationPage';
import {ScrollToElementCenter} from '../Interactions/ScrollToElementCenter'
import { Memory } from '../Utils/Memory';

export class FillDeliveryInformation {
    static withDefaultOptions() {
        return Task.where(`#actor fills delivery information with default options`,

            
            Interaction.where(`#actor selects delivery date`, () => {
                console.log('🛠 Seleccionando fecha de entrega...');                                
            }), 
            ScrollToElementCenter.to(DeliveryInformationPage.firstAvailableDay),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.firstAvailableDay)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.firstAvailableDay)).click(),
            Wait.for(Duration.ofSeconds(2)),

           
            Interaction.where(`#actor selects delivery hour`, () => {
                console.log('🛠 Seleccionando hora de entrega...');               
            }),     
             ScrollToElementCenter.to(DeliveryInformationPage.availableHourSlot),
             Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.availableHourSlot)), isVisible()),
             PageElement.located(By.xpath(DeliveryInformationPage.availableHourSlot)).click(),
             Wait.for(Duration.ofSeconds(5)),      

            ScrollToElementCenter.to(DeliveryInformationPage.availableHourSlotLabel),
            Interaction.where(`#actor saves delivery hour to memory`, async (actor) => {                
                const hourLabel = await actor.answer(
                    PageElement.located(By.xpath(DeliveryInformationPage.availableHourSlotLabel)).text()
                );
                console.log(`🕒 Hora de entrega seleccionada: ${hourLabel}`);
                Memory.remember('deliveryHour', hourLabel);
            }),            

            
            Interaction.where(`#actor confirms delivery`, () => {
                console.log('🛠 Confirmando entrega...');                
            }),   
            //ScrollToElementCenter.to(DeliveryInformationPage.continueButton),          
            //Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.continueButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.continueButton)).click(),            

            Interaction.where(`#actor completes delivery information`, () => {
                console.log('✅ Información de entrega completada');
            }),
            Wait.for(Duration.ofSeconds(12)),
        );
    }

    static clickContinueButton() {
        return Task.where(`#actor clicks continue button`,
            ScrollToElementCenter.to(DeliveryInformationPage.continueButton),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.continueButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.continueButton)).click(),
            Wait.for(Duration.ofSeconds(10))
        );
    }
}