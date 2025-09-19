
import { Task, Wait, Duration } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { LoginPage } from '../PageObject/LoginPage';

export class Login {   

   
    static toApp(username: string, password: string) {
        return Task.where(`#actor logs in with valid credentials`,
            Wait.for(Duration.ofSeconds(2)),
            PageElement.located(By.xpath(LoginPage.emailField)).enterValue(username),
            PageElement.located(By.xpath(LoginPage.passwordField)).enterValue(password),
            //Wait.until(PageElement.located(By.xpath(LoginPage.loginButton)), isVisible()),
            PageElement.located(By.xpath(LoginPage.loginButton)).click(),
            Wait.for(Duration.ofSeconds(6)),
        );
    }

    static withInvalidCredentials(username: string, password: string) {
        return Task.where(`#actor logs in with invalid credentials`,
            Wait.for(Duration.ofSeconds(2)),
            PageElement.located(By.xpath(LoginPage.emailField)).enterValue(username),
            PageElement.located(By.xpath(LoginPage.passwordField)).enterValue(password),
           // Wait.until(PageElement.located(By.xpath(LoginPage.loginButton)), isVisible()),
            PageElement.located(By.xpath(LoginPage.loginButton)).click(),
            Wait.for(Duration.ofSeconds(6)),
        );
    }

    static withEmptyFields() {
        return Task.where(`#actor logs in with empty fields`,
            Wait.for(Duration.ofSeconds(2)),
            PageElement.located(By.xpath(LoginPage.emailField)).enterValue(''),
            PageElement.located(By.xpath(LoginPage.passwordField)).enterValue(''),
            //Wait.until(PageElement.located(By.xpath(LoginPage.loginButton)), isVisible()),
            PageElement.located(By.xpath(LoginPage.loginButton)).click(),
            Wait.for(Duration.ofSeconds(6)),
        );
    }
}