export class RegistrationPage {
  
  // 📌 Selectores
  static readonly firstNameField = '//input[@id="firstname"]';
  static readonly lastNameField = '//input[@id="lastname"]';
  static readonly dobField = '//input[@id="dob"]';
  static readonly documentField = '//input[@id="taxvat"]';
  static readonly emailField = '//input[@id="email_address"]';
  static readonly passwordField = '//input[@id="password"]';
  static readonly confirmPasswordField = '//input[@id="password-confirmation"]';
  static readonly submitButton = '(//button[@id="send2" and @type="submit" and contains(@class, "action submit primary")])[1]';

  // Errores generales
  static readonly duplicateEmailError = '//div[contains(@class, "message-error")]//div';
  static readonly firstNameError = '//div[contains(@class, "message-error")]//div';
  static readonly lastNameError = '//div[contains(@class, "message-error")]//div';

  // Errores específicos de campos
  static readonly passwordError = '//div[@id="password-error"]';
  static readonly emailAddressError = '//div[@id="email_address-error"]';

  // Saludo usuario logueado después del registro
  static readonly greetingLoggedIn = '//span[@class="logged-in"]';
  static readonly greetingLoggedInContains = '//span[contains(@class, "logged-in")]';

  // Mensaje de éxito después del registro
  static readonly successMessage = '//div[contains(@class, "message-success") and contains(@class, "message")]//div[@data-bind[contains(., "prepareMessageForHtml")]]';

}