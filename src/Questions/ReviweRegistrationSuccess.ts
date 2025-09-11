import { Actor, Wait, Question } from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { Ensure, equals } from '@serenity-js/assertions';
import { RegistrationPage } from '../PageObject/RegistrationPage';

export class ReviweRegistrationSuccess {

  /*static isVisibleUserProfile() {
    return {
      async answeredBy(actor: Actor) {
        const greeting = PageElement.located(By.xpath(RegistrationPage.greetingLoggedIn));
        await actor.attemptsTo(
          Wait.until(greeting, isVisible()),
          Ensure.that(greeting.isVisible(), equals(true))
        );
        return await greeting.isVisible().answeredBy(actor);
      }
    };
  }*/

  public static readonly isVisibleUserProfile = Question.about('el usuario ve el saludo', async actor => {
    const greeting = PageElement.located(By.xpath(RegistrationPage.greetingLoggedIn));
    await actor.answer(Wait.until(greeting, isVisible()));
    await actor.answer(Ensure.that(greeting.isVisible(), equals(true)));
    return await greeting.isVisible().answeredBy(actor);
  });

  static byCheckingMessageSuccess() {
    return {
      async answeredBy(actor: Actor) {
        const successMessage = PageElement.located(By.xpath(RegistrationPage.successMessage));        
        console.log('✅ El mensaje de éxito es:', await successMessage.text().answeredBy(actor));
        return await successMessage.text().answeredBy(actor);
      }
    };
  }

  static text() {
    return {
      async answeredBy(actor: Actor) {
        const greetingContains = PageElement.located(By.xpath(RegistrationPage.greetingLoggedInContains));
        const fullText = await greetingContains.text().answeredBy(actor);
        return fullText?.replace(/\s+/g, ' ').trim();
      }
    };
  }
}