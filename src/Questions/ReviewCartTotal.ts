import { Question, AnswersQuestions, UsesAbilities, Wait } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { CartPage } from '../PageObject/CartPage';


export class ReviewCartTotal { 

    public static readonly price = Question.about(
        'the total price in the cart', 
        async (actor: AnswersQuestions & UsesAbilities) =>{
            const mainPrice = PageElement.located(By.xpath(CartPage.totalPriceLabel));
            await actor.answer(Wait.until(mainPrice, isVisible()));
            const mainPriceText = await actor.answer(mainPrice.text());            
            console.log(`the total price in the cart: ${mainPriceText}`);
            return mainPriceText;            
    });

    public static readonly totalSectionisVisible = Question.about(
        'whether the total section is visible',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const totalSectionLabel = PageElement.located(By.xpath(CartPage.totalSectionSelectors));
            await actor.answer(Wait.until(totalSectionLabel, isVisible()));
            const isVisibleTotalSection = await actor.answer(totalSectionLabel.isVisible());
            console.log(`cart-summary -  whether the total section is visible?: `, isVisibleTotalSection);
            return isVisibleTotalSection;
        }
    );     
}