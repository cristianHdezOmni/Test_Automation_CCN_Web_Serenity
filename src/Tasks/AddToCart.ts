import { Task, Wait, Duration } from '@serenity-js/core';
import { By, PageElement, isVisible, Hover } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';
import { ScrollToElementCenter } from '../Interactions/ScrollToElementCenter';

export class AddToCart {
    static addProductToCart(productName: string) {
        const buttonXpath = CartPage.addToCartButton(productName);
        return Task.where(`#actor adds product "${productName}" to cart`,
            Wait.until(PageElement.located(By.xpath(buttonXpath)), isVisible()),
            ScrollToElementCenter.to(buttonXpath),
            Hover.over(PageElement.located(By.xpath(buttonXpath))), // Opcional si requiere hover
            PageElement.located(By.xpath(buttonXpath)).click(),
            Wait.for(Duration.ofSeconds(3)),
        );
    }
}