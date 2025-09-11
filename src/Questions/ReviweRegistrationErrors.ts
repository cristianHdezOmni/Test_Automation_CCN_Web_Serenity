import { Question, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, By } from '@serenity-js/web';
import { RegistrationPage } from '../PageObject/RegistrationPage';

export class ReviweRegistrationErrors {
  public static readonly hasDuplicateEmailError = Question.about('whether duplicate email error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.duplicateEmailError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de email duplicado:', isVisible);
    return isVisible;
  });

  public static readonly hasPasswordMinLengthError = Question.about('whether password min length error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.passwordError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de longitud mínima de contraseña:', isVisible);
    return isVisible;
  });

  public static readonly hasPasswordComplexityError = Question.about('whether password complexity error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.passwordError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de complejidad de contraseña:', isVisible);
    return isVisible;
  });

  public static readonly hasFirstNameError = Question.about('whether first name error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.firstNameError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de nombre:', isVisible);
    return isVisible;
  });

  public static readonly hasLastNameError = Question.about('whether last name error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.lastNameError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de apellido:', isVisible);
    return isVisible;
  });

  public static readonly hasInvalidEmailError = Question.about('whether invalid email error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.emailAddressError));
    const isVisible = await actor.answer(error.isVisible());
    console.log('Mensaje de error de email inválido:', isVisible);
    return isVisible;
  });
}