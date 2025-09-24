import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';
import { ScrollToElementCenter} from "../Interactions/ScrollToElementCenter";


export class ProceedToCheckout {
    static now() {
        return Task.where(`#actor proceeds to checkout`,
            Wait.for(Duration.ofSeconds(3)),
            //Wait.until(PageElement.located(By.xpath(CartPage.proceedToCheckoutButton)), isVisible()),            
            ScrollToElementCenter.to(CartPage.proceedToCheckoutButton),
            PageElement.located(By.xpath(CartPage.proceedToCheckoutButton)).click(),
            Interaction.where(`#actor confirms checkout action`, () => {
                console.log('✅ Procediendo al checkout');
            }),
            Wait.for(Duration.ofSeconds(5))
        );
    }
}