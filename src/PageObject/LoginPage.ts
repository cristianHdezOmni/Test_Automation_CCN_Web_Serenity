export class LoginPage {
  static readonly emailField = '//input[@id="email"]';
  static readonly passwordField = '//input[@id="password"]';
  static readonly loginButton = '*//div[@class="block block-customer-login"]//button[@class="action login primary" and @id="send2"]';
  static readonly errorMessage = '.message-error';

  // Mensajes de saludo y error
  static readonly greetingText = '//span[contains(@class, "logged-in")]';
  static readonly errorUnsuccessfulLogin =
    '//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]';

  static readonly errorEmailField = '//div[@id="email-error"]';
  static readonly errorPasswordField = '//div[@id="password-error"]';
}

