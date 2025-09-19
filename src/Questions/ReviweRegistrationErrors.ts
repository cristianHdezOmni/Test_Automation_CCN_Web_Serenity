import { Question, Wait, AnswersQuestions, UsesAbilities} from '@serenity-js/core';
import { PageElement, By, isVisible } from '@serenity-js/web';
import { RegistrationPage } from '../PageObject/RegistrationPage';



export class ReviweRegistrationErrors {
  public static readonly hasDuplicateEmailError = Question.about('whether duplicate email error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    
    const error = PageElement.located(By.xpath(RegistrationPage.duplicateEmailError));    
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de email duplicado:', isVisibleError);
    return isVisibleError;
  });

  public static readonly hasPasswordMinLengthError = Question.about('whether password min length error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
   
    const error = PageElement.located(By.xpath(RegistrationPage.passwordError));
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de longitud mínima de contraseña:', isVisibleError);
    return isVisibleError;
  });

  public static readonly hasPasswordComplexityError = Question.about('whether password complexity error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    
    const error = PageElement.located(By.xpath(RegistrationPage.passwordError));
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de complejidad de contraseña:', isVisibleError);
    return isVisibleError;
  });

  public static readonly hasFirstNameError = Question.about('whether first name error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    
    const error = PageElement.located(By.xpath(RegistrationPage.firstNameError));
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de nombre:', isVisibleError);
    return isVisibleError;
  });

  public static readonly hasLastNameError = Question.about('whether last name error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.lastNameError));
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de apellido:', isVisibleError);
    return isVisibleError;
  });

  public static readonly hasInvalidEmailError = Question.about('whether invalid email error is visible', async (actor: AnswersQuestions & UsesAbilities) => {
    const error = PageElement.located(By.xpath(RegistrationPage.emailAddressError));
    await actor.answer(Wait.until(error, isVisible()));
    const isVisibleError = await actor.answer(error.isVisible());
    console.log('Mensaje de error de email inválido:', isVisibleError);
    return isVisibleError;
  });
}