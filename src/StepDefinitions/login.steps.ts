import { Given, When, Then } from '@cucumber/cucumber';
import { Ensure, includes, equals } from '@serenity-js/assertions';
import { Login } from '../Tasks/Login';
import { OpenPageUrlLogin } from '../Tasks/OpenPageUrlLogin';
import { ReviewLoggedInUserGreeting } from '../Questions/ReviewLoggedInUserGreeting';
import { CustomWorld } from '../support/serenity.config';

Given('the user opens the login page', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        OpenPageUrlLogin.atEcommerce()
    );
});

When('the user logs in with username {string} and password {string}', { timeout: 60000 }, async function (this: CustomWorld, username: string, password: string) {
    await this.actor.attemptsTo(
        Login.toApp(username, password)
    );
});

Then('the greeting should contain {string}', { timeout: 40000 }, async function (this: CustomWorld, expectedText: string) {
    const actualText = await this.actor.answer(ReviewLoggedInUserGreeting.text);
    console.log('✅ Successful login, greeting text:', actualText);
    await this.actor.attemptsTo(
        Ensure.that(actualText.replace(/\s+/g, ' ').trim(), includes(expectedText.replace(/\s+/g, ' ').trim()))
    );
});

Then('the error message should be {string}', { timeout: 40000 }, async function (this: CustomWorld, expectedErrorMessage: string) {
    const errorVisible = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageBoolean);
    console.log('✅ Error message visibility:', errorVisible);
    await this.actor.attemptsTo(
        Ensure.that(errorVisible, equals(true))
    );
    const errorText = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageText);
    console.log('✅ Error message text:', errorText);
    await this.actor.attemptsTo(
        Ensure.that(errorText.toLowerCase(), includes(expectedErrorMessage.toLowerCase()))
    );
});

Then('the email field error message should be {string}', { timeout: 40000 }, async function (this: CustomWorld, expectedErrorMessage: string) {
    const errorVisible = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageFieldEmail);
    console.log('✅ Email field error message visibility:', errorVisible);
    await this.actor.attemptsTo(
        Ensure.that(errorVisible, equals(true))
    );
    const errorText = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageFieldEmailText);
    await this.actor.attemptsTo(
        Ensure.that(errorText.toLowerCase(), includes(expectedErrorMessage.toLowerCase()))
    );
});

Then('the password field error message should be {string}', { timeout: 40000 }, async function (this: CustomWorld, expectedErrorMessage: string) {
    const errorVisible = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageFieldPassword);
    console.log('✅ Password field error message visibility:', errorVisible);
    await this.actor.attemptsTo(
        Ensure.that(errorVisible, equals(true))
    );
    const errorText = await this.actor.answer(ReviewLoggedInUserGreeting.errorMessageFieldPasswordText);
        console.log('✅ Password field error message text:', errorText);
    await this.actor.attemptsTo(
        Ensure.that(errorText.toLowerCase(), includes(expectedErrorMessage.toLowerCase()))
    );
});