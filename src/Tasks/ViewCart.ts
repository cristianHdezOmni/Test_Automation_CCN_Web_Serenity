import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';

const LogOpenCart = Interaction.where(`#log open cart`, async () => {
    console.log('✅ Carrito de compras abierto');
});

export class ViewCart {
    static openCart() {
        return Task.where(`#actor opens the shopping cart`,
            Wait.until(PageElement.located(By.xpath(CartPage.cartIcon)), isVisible()),
            PageElement.located(By.xpath(CartPage.cartIcon)).click(),
            LogOpenCart,
            Wait.for(Duration.ofSeconds(3)),
        );
    }
}