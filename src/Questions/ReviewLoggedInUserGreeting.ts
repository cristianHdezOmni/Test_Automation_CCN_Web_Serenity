import { Question, Wait, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { LoginPage } from '../PageObject/LoginPage';




export class ReviewLoggedInUserGreeting {

    public static readonly text = Question.about('the greeting text after login', async (actor: AnswersQuestions & UsesAbilities) => {
        const greeting = PageElement.located(By.xpath(LoginPage.greetingText));
        await actor.answer(Wait.until(greeting, isVisible()));
        const fullText = await actor.answer(greeting.text());
        return fullText.replace(/\s+/g, ' ').trim();
    });

    public static readonly errorMessageBoolean = Question.about('whether login error message is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const error = PageElement.located(By.xpath(LoginPage.errorUnsuccessfulLogin));
        await actor.answer(Wait.until(error, isVisible()));
        const isVisibleError = await actor.answer(error.isVisible());
        console.log('Mensaje de error:', isVisibleError);
        return isVisibleError;
    });

    public static readonly errorMessageText = Question.about('the login error message text', async (actor: AnswersQuestions & UsesAbilities) => {
        const error = PageElement.located(By.xpath(LoginPage.errorUnsuccessfulLogin));
        await actor.answer(Wait.until(error, isVisible()));
        const fullText = await actor.answer(error.text());
        return fullText.replace(/\s+/g, ' ').trim();
    });

    public static readonly errorMessageFieldEmail = Question.about('whether email field error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const errorField = PageElement.located(By.xpath(LoginPage.errorEmailField));
        await actor.answer(Wait.until(errorField, isVisible()));
        const isVisibleError = await actor.answer(errorField.isVisible());
        console.log('Mensaje de error del campo:', isVisibleError);
        return isVisibleError;
    });

    public static readonly errorMessageFieldPassword = Question.about('whether password field error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const errorField = PageElement.located(By.xpath(LoginPage.errorPasswordField));
        await actor.answer(Wait.until(errorField, isVisible()));
        const isVisibleError = await actor.answer(errorField.isVisible());
        console.log('Mensaje de error del campo:', isVisibleError);
        return isVisibleError;
    });

   public static readonly errorMessageFieldEmailText = Question.about('the email field error message text', async (actor: AnswersQuestions & UsesAbilities) => {
        const errorField = PageElement.located(By.xpath(LoginPage.errorEmailField));
        await actor.answer(Wait.until(errorField, isVisible()));
        const fullText = await actor.answer(errorField.text());
        console.log('Mensaje de error del campo:', fullText);
        return fullText.replace(/\s+/g, ' ').trim();
    });

    public static readonly errorMessageFieldPasswordText = Question.about('the password field error message text', async (actor: AnswersQuestions & UsesAbilities) => {
        const errorField = PageElement.located(By.xpath(LoginPage.errorPasswordField));
        await actor.answer(Wait.until(errorField, isVisible()));
        const fullText = await actor.answer(errorField.text());
        console.log('Mensaje de error del campo:', fullText);
        return fullText.replace(/\s+/g, ' ').trim();
    });
}