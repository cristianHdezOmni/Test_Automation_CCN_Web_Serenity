import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible, Select } from '@serenity-js/web';
import { DeliveryInformationPage } from '../PageObject/DeliveryInformationPage';
import { Memory } from '../Utils/Memory';

export class SelectDeliverySlot {
    static withAvailableDateAndTime() {
        return Task.where(`#actor selects delivery slot with available date and time`,
            Interaction.where(`#actor logs date selection`, () => {
                console.log('🛠 Seleccionando fecha de entrega...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.firstAvailableDay)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.firstAvailableDay)).click(),
            Wait.for(Duration.ofSeconds(1))
        );
    }

    static willPickUpTheOrder() {
        return Task.where(`#actor confirms pickup order details`,
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.pickupConfirmationCheck)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.pickupConfirmationCheck)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.telephoneInput)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.telephoneInput)).enterValue('8091234567'),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.vatIdInput)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.vatIdInput)).enterValue('123456789')
        );
    }

    static homeDeliverySlotNot() {
        return Task.where(`#actor selects home delivery without slot`,
            Wait.for(Duration.ofSeconds(4)),
            Interaction.where(`#actor logs home delivery selection`, () => {
                console.log('🏠 Seleccionando entrega a domicilio...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.regionName)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.regionName)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.homeDeliveryOption)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.homeDeliveryOption)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.deliveryAddresSlotNots)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.deliveryAddresSlotNots)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.saveButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.saveButton)).click(),
            Wait.for(Duration.ofSeconds(15)),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.confirmationMessage)), isVisible()),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.closeButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.closeButton)).click()
        );
    }

    static homeDelivery() {
        return Task.where(`#actor selects home delivery`,
            Wait.for(Duration.ofSeconds(4)),
            Interaction.where(`#actor logs home delivery selection`, () => {
                console.log('🏠 Seleccionando entrega a domicilio...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.regionName)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.regionName)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.homeDeliveryOption)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.homeDeliveryOption)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.deliveryAddress)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.deliveryAddress)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.saveButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.saveButton)).click(),
            Wait.for(Duration.ofSeconds(15)),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.confirmationMessage)), isVisible()),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.closeButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.closeButton)).click()
        );
    }

    static pickup() {
        return Task.where(`#actor selects pickup delivery`,
            Wait.for(Duration.ofSeconds(4)),
            Interaction.where(`#actor logs pickup selection`, () => {
                console.log('🏠 Seleccionando entrega en tienda...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.regionName)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.regionName)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.pickupOption)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.pickupOption)).click(),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.regionOptionSelect)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.regionOptionSelect)).click(),
            Select.option('Distrito Nacional').from(PageElement.located(By.xpath(DeliveryInformationPage.regionOptionSelect))),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.sourceOptionSelect)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.sourceOptionSelect)).click(),
            Wait.for(Duration.ofSeconds(1)),
            Select.option('Supermercado Nacional Arroyo Hondo').from(PageElement.located(By.xpath(DeliveryInformationPage.sourceOptionSelect))),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.saveButtonPickup)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.saveButtonPickup)).click(),
            Wait.for(Duration.ofSeconds(15)),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.confirmationMessage)), isVisible()),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.closeButton)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.closeButton)).click()
        );
    }

    static withNoAvailableTime() {
        return Task.where(`#actor selects date with no available time`,
            Interaction.where(`#actor logs no available time selection`, () => {
                console.log('🛠 Seleccionando fecha de entrega sin tiempo disponible...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.noAvailableDay)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.noAvailableDay)).click(),
            Wait.for(Duration.ofSeconds(1))
        );
    }

    static withAnotherAvailableTime() {
        return Task.where(`#actor changes to another available time slot`,
            Wait.for(Duration.ofSeconds(2)),
            Interaction.where(`#actor logs slot change`, () => {
                console.log('🛠 Cambiando a otro horario de entrega disponible...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.goBackLink)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.goBackLink)).click(),
            Interaction.where(`#actor logs date selection`, () => {
                console.log('🛠 Seleccionando fecha de entrega...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.secondAvailableDay)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.secondAvailableDay)).click(),
            Wait.for(Duration.ofSeconds(1)),
            Interaction.where(`#actor logs hour selection`, () => {
                console.log('🛠 Seleccionando hora de entrega...');
            }),
            Wait.until(PageElement.located(By.xpath(DeliveryInformationPage.secondAvailableHourSlot)), isVisible()),
            PageElement.located(By.xpath(DeliveryInformationPage.secondAvailableHourSlot)).click(),
            Wait.for(Duration.ofSeconds(1)),
            Interaction.where(`#actor saves hour to memory`, async (actor) => {
                const hourLabel = await actor.answer(
                    PageElement.located(By.xpath(DeliveryInformationPage.secondAvailableHourSlotLabel)).text()
                );
                console.log(`🕒 Hora de entrega seleccionada: ${hourLabel}`);
                Memory.remember('deliveryHour', hourLabel);
            }),
            Interaction.where(`#actor confirms delivery`, () => {
                console.log('🛠 Confirmando entrega...');
            }),
            Wait.until(PageElement.located(By.css(DeliveryInformationPage.continueButton)), isVisible()),
            PageElement.located(By.css(DeliveryInformationPage.continueButton)).click(),
            Interaction.where(`#actor completes delivery setup`, () => {
                console.log('✅ Información de entrega completada');
            }),
            Wait.for(Duration.ofSeconds(10))
        );
    }
}