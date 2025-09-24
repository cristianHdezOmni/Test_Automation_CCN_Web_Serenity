import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';

const LogDecreaseQty = (productName: string) =>
    Interaction.where(`#log decrease quantity for "${productName}"`, async () => {
        console.log(`✅ Se hizo clic en "Disminuir cantidad" para "${productName}".`);
    });

export class RemoveFromCart {
    static clickDecreaseQtySingleProduct(productName: string) {
        const buttonXpath = CartPage.decreaseQtyButton(productName);
        return Task.where(`#actor decreases quantity for "${productName}" in cart`,
            Wait.until(PageElement.located(By.xpath(buttonXpath)), isVisible()),
            PageElement.located(By.xpath(buttonXpath)).click(),
            LogDecreaseQty(productName),
            Wait.for(Duration.ofSeconds(5)),
        );
    }
}