import { Given, When, Then } from '@cucumber/cucumber';
import { Ensure, includes, equals } from '@serenity-js/assertions';
import { Category } from '../Tasks/Category';
import { AddToCart } from '../Tasks/AddToCart';
import { RemoveFromCart } from '../Tasks/RemoveFromCart';
import { ViewCart } from '../Tasks/ViewCart';
import { ReviewCartContents } from '../Questions/ReviewCartContents';
import { ReviewCartTotal } from '../Questions/ReviewCartTotal';
import { ReviewCartQuantity } from '../Questions/ReviewCartQuantity';
import { CustomWorld } from '../support/serenity.config';

Given('the user is on the product page', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        Category.forShopping()
    );
});

Given('the user has added a product to the cart', { timeout: 50000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        Category.forShopping()
    );
});

When('the user clicks the Add to Cart button', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        AddToCart.addProductToCart('Carne De Res Molida Brangus, Lb')
    );
});

When('the user clicks the Remove from Cart button', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        RemoveFromCart.clickDecreaseQtySingleProduct('Carne De Res Molida Brangus, Lb')
    );
});

When('the user updates the quantity', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        ReviewCartQuantity.validateQuantity(0),
        AddToCart.addProductToCart('Carne De Res Molida Brangus, Lb')
    );
});

When('the user views the cart', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        ViewCart.openCart()
    );
});

Then('the cart should contain the added product', { timeout: 40000 }, async function (this: CustomWorld) {
    const hasProductAddedMessage = await this.actor.answer(ReviewCartContents.hasProductAddedMessage('Carne De Res Molida Brangus, Lb'));
    await this.actor.attemptsTo(
        Ensure.that(hasProductAddedMessage, equals(true))
    );
    const hasDecreaseButton = await this.actor.answer(ReviewCartContents.hasDecreaseQtyButton('Carne De Res Molida Brangus, Lb'));
    await this.actor.attemptsTo(
        Ensure.that(hasDecreaseButton, equals(true))
    );
});

Then('the cart should be empty', { timeout: 40000 }, async function (this: CustomWorld) {
    const hasNotDecreaseButton = await this.actor.answer(ReviewCartContents.hasNotDecreaseQtyButton('Carne De Res Molida Brangus, Lb'));
    await this.actor.attemptsTo(
        Ensure.that(hasNotDecreaseButton, equals(true))
    );
});

Then('the cart should reflect the updated quantity', { timeout: 40000 }, async function (this: CustomWorld) {
    const quantity = await this.actor.answer(ReviewCartContents.totalQuantity);
    await this.actor.attemptsTo(
        Ensure.that(quantity, equals(1))
    );
    console.log(`Cantidad total en el carrito esperada: 1`);
});

Then('the cart should display the added product', { timeout: 40000 }, async function (this: CustomWorld) {
    const hasProducts = await this.actor.answer(ReviewCartContents.hasProducts);
    await this.actor.attemptsTo(
        Ensure.that(hasProducts, equals(true))
    );
    const productNames = await this.actor.answer(ReviewCartContents.productNames);
    await this.actor.attemptsTo(
        Ensure.that(productNames.length, equals(productNames.length > 0 ? productNames.length : 1))
    );
});

Then('the total purchase summary should be displayed', { timeout: 40000 }, async function (this: CustomWorld) {
    const totalPrice = await this.actor.answer(ReviewCartTotal.price);
    console.log(`Precio total en el carrito: ${totalPrice}`);
    await this.actor.attemptsTo(
        Ensure.that(totalPrice, includes('$'))
    );
    const hasTotalSection = await this.actor.answer(ReviewCartTotal.totalSectionisVisible);
    console.log(`¿Sección de total visible?: ${hasTotalSection}`);
    await this.actor.attemptsTo(
        Ensure.that(hasTotalSection, equals(true))
    );
});