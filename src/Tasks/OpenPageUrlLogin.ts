import { Task, Interaction } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';


export class OpenPageUrlLogin {

  static atEcommerce() {
    return Task.where(`#actor opens the registration page`,
      Navigate.to('https://mcstaging.supermercadosnacional.com/customer/account/login/'),      
      // Custom pause
      Interaction.where('waits for 3 seconds', async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
      })
    );
  }
}