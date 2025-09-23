import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';

export class ReviewCartContents {

    public static readonly hasDecreaseQtyButton = (productName: string) =>
        Question.about(
            `whether decrease quantity button for "${productName}" is visible`,
            async (actor: AnswersQuestions & UsesAbilities) => {
                const button = PageElement.located(By.xpath(CartPage.decreaseQtyButton(productName)));
                await actor.answer(Wait.until(button, isVisible()));
                const isVisibleButton = await actor.answer(button.isVisible());
                console.log(`¿Botón "Disminuir cantidad" visible para "${productName}"?:`, isVisibleButton);
                return isVisibleButton;
            }
        );

    public static readonly hasProductAddedMessage = (productName: string) =>
        Question.about(
            `whether product added message for "${productName}" is visible`,
            async (actor: AnswersQuestions & UsesAbilities) => {
                const message = PageElement.located(By.xpath(CartPage.productAddedMessage(productName)));
                await actor.answer(Wait.until(message, isVisible()));
                const isVisibleMessage = await actor.answer(message.isVisible());
                console.log(`¿Mensaje de producto agregado visible para "${productName}"?:`, isVisibleMessage);
                return isVisibleMessage;
            }
        );

    public static readonly hasNotDecreaseQtyButton = (productName: string) =>
        Question.about(
            `whether decrease quantity button for "${productName}" is NOT visible`,
            async (actor: AnswersQuestions & UsesAbilities) => {
                const button = PageElement.located(By.xpath(CartPage.decreaseQtyButton(productName)));
                const isVisibleButton = await actor.answer(button.isVisible());
                const notVisible = !isVisibleButton;
                console.log(`¿Botón "Disminuir cantidad" NO visible para "${productName}"?:`, notVisible);
                return notVisible;
            }
        );

    public static readonly totalQuantity = Question.about(
        'the total quantity in the cart',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const counter = PageElement.located(By.xpath(CartPage.cartCounterNumber));
            await actor.answer(Wait.until(counter, isVisible()));
            const quantityText = await actor.answer(counter.text());
            const totalQuantity = Number(quantityText?.trim() || '0');
            console.log(`Cantidad total en el carrito: ${totalQuantity}`);
            return totalQuantity;
        }
    );

    public static readonly hasProducts = Question.about(
        'whether the cart has products',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const products = PageElement.located(By.xpath(CartPage.cartProductName));
            const emptyMessage = PageElement.located(By.xpath(CartPage.emptyCartMessage));
            const productHandles = await actor.answer(products.nativeElement());
            const productElements = await (productHandles as any).evaluateAll
                ? await (productHandles as any).evaluateAll((nodes: any[]) => nodes.length)
                : [];
            if (productElements > 0) return true;
            const emptyHandles = await actor.answer(emptyMessage.nativeElement());
            const emptyElements = await (emptyHandles as any).evaluateAll
                ? await (emptyHandles as any).evaluateAll((nodes: any[]) => nodes.length)
                : [];
            return emptyElements > 0;
        }
    );

    public static readonly productCount = Question.about(
        'the number of products in the cart',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const products = PageElement.located(By.xpath(CartPage.cartProductName));
            const productHandles = await actor.answer(products.nativeElement());
            const count = await (productHandles as any).evaluateAll
                ? await (productHandles as any).evaluateAll((nodes: any[]) => nodes.length)
                : 0;
            console.log(`Cantidad de productos en el carrito: ${count}`);
            return count;
        }
    );

    public static readonly productNames = Question.about(
        'the names of products in the cart',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const products = PageElement.located(By.xpath(CartPage.cartProductName));
            const productHandles = await actor.answer(products.nativeElement());
            let names: string[] = [];
            if ((productHandles as any).evaluateAll) {
                names = await (productHandles as any).evaluateAll((nodes: any[]) =>
                    nodes.map(n => n.textContent?.trim()).filter(Boolean)
                );
            }
            console.log(`Nombres de productos en el carrito: ${names.join(", ")}`);
            return names;
        }
    );
}