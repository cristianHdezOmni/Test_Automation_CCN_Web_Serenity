import { Ensure, includes, equals } from '@serenity-js/assertions';
import { Given, When, Then } from '@cucumber/cucumber';
import { RegisterUser } from '../Tasks/RegisterUser';
import { OpenPageUrlRegistration } from '../Tasks/OpenPageUrlRegistration';
import { ReviweRegistrationErrors } from '../Questions/ReviweRegistrationErrors';
import { ReviweRegistrationSuccess } from '../Questions/ReviweRegistrationSuccess';
import { CustomWorld } from '../support/world';
import { User } from '../Model/User';

Given('the user is on the registration page', { timeout: 60000 }, async function (this: CustomWorld) {
  await this.actor.attemptsTo(
    OpenPageUrlRegistration.atEcommerce()
  );
});

When('the user registers with valid information:', { timeout: 60000 }, async function (this: CustomWorld, dataTable) {
  const user = dataTable.hashes()[0] as User;
  console.log(user);
  await this.actor.attemptsTo(
    RegisterUser.withData({
      ...user,
      email: `usertestqa.${Date.now()}@omni.pro`
    })
  );
});

Then('the user should be successfully registered', { timeout: 40000 }, async function (this: CustomWorld) {
  const message = await this.actor.answer(ReviweRegistrationSuccess.byCheckingMessageSuccess());
  console.log('Mensaje de éxito:', message);
  await this.actor.attemptsTo(
    Ensure.that(message, includes('Gracias por registrarse en Supermercados Nacional.'))
  );

  const greetingText = await this.actor.answer(ReviweRegistrationSuccess.text());
  console.log('Texto de saludo:', greetingText);
  await this.actor.attemptsTo(
    Ensure.that(greetingText, includes('Hola'))
  );
  await this.actor.answer(ReviweRegistrationSuccess.isVisibleUserProfile);
  console.log('✅ El perfil de usuario es visible');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationSuccess.isVisibleUserProfile, equals(true))
  );

});

When('the user tries to register with duplicate email {string}', async function (this: CustomWorld, email) {
  await this.actor.attemptsTo(
    RegisterUser.withData({
      firstName: 'Carlos',
      lastName: 'Perez',
      dateOfBirth: '01/01/1990',
      document: '11111111',
      email,
      password: 'Password123!'
    })
  );
});

Then('the system should show duplicate email error', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasDuplicateEmailError);
});

// Implementación de los steps faltantes
When('the user tries to register with password {string}', async function (this: CustomWorld, password) {
  await this.actor.attemptsTo(
    RegisterUser.withData({
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: '01/01/1990',
      document: '12345678',
      email: `usertestqa.${Date.now()}@omni.pro`,
      password
    })
  );
});

Then('the system should show password minimum length error', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasPasswordMinLengthError);
  console.log('✅ Se mostró el error de longitud mínima de contraseña');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationErrors.hasPasswordMinLengthError, equals(true))
  );

});

Then('the system should show password complexity error', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasPasswordComplexityError);
  console.log('✅ Se mostró el error de complejidad de contraseña');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationErrors.hasPasswordComplexityError, equals(true))
  );
});

When('the user tries to register with first name {string}', async function (this: CustomWorld, firstName) {
  await this.actor.attemptsTo(
    RegisterUser.withData({
      firstName,
      lastName: 'User',
      dateOfBirth: '01/01/1990',
      document: '12345678',
      email: `usertestqa.${Date.now()}@omni.pro`,
      password: 'Password123!'
    })
  );
});

Then('the system should show first name is not valid!', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasFirstNameError);
  console.log('✅ Se mostró el error de nombre inválido');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationErrors.hasFirstNameError, equals(true))
  );
});

When('the user tries to register with last name {string}', async function (this: CustomWorld, lastName) {
  await this.actor.attemptsTo(
    RegisterUser.withData({
      firstName: 'Test',
      lastName,
      dateOfBirth: '01/01/1990',
      document: '12345678',
      email: `usertestqa.${Date.now()}@omni.pro`,
      password: 'Password123!'
    })
  );
});

Then('the system should show last name is not valid!', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasLastNameError);
  console.log('✅ Se mostró el error de apellido inválido');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationErrors.hasLastNameError, equals(true))
  );
});

When('the user tries to register with email {string}', async function (this: CustomWorld, email) {
  await this.actor.attemptsTo(
    RegisterUser.withData({
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: '01/01/1990',
      document: '12345678',
      email,
      password: 'Password123!'
    })
  );
});

Then('the system should show email is not valid!', async function (this: CustomWorld) {
  await this.actor.answer(ReviweRegistrationErrors.hasInvalidEmailError);
  console.log('✅ Se mostró el error de email inválido');
  await this.actor.attemptsTo(
    Ensure.that(ReviweRegistrationErrors.hasInvalidEmailError, equals(true))
  );
});

