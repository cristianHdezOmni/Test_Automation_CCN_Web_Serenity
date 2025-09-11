import { Task, Interaction } from '@serenity-js/core';
import { Navigate, PageElement, By } from '@serenity-js/web';
import { Ensure, equals } from '@serenity-js/assertions';

export class OpenPageUrlRegistration {

  static atEcommerce() {
    return Task.where(`#actor opens the registration page`,
      Navigate.to('https://mcstaging.supermercadosnacional.com/customer/account/create/'),
      // Wait for fields to be visible
      //Ensure.that(PageElement.located(By.css('#firstname')).isVisible(), equals(true)),
      //Ensure.that(PageElement.located(By.css('#lastname')).isVisible(), equals(true)),
      //Ensure.that(PageElement.located(By.css('#email_address')).isVisible(), equals(true)),
      // Custom pause
      Interaction.where('waits for 3 seconds', async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
      })
    );
  }
}