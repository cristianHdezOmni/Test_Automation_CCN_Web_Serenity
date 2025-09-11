import { Task } from '@serenity-js/core';
import { By, PageElement } from '@serenity-js/web';
import { RegistrationPage } from '../PageObject/RegistrationPage';
import { User } from '../Model/User';

export class RegisterUser {    

    static withData(user: User) {
      console.log('Email; ',user.email)
    return Task.where(`#actor registers a new user`,
      PageElement.located(By.xpath(RegistrationPage.firstNameField)).enterValue(user.firstName),
      PageElement.located(By.xpath(RegistrationPage.lastNameField)).enterValue(user.lastName),
      PageElement.located(By.xpath(RegistrationPage.dobField)).enterValue(user.dateOfBirth),
      PageElement.located(By.xpath(RegistrationPage.documentField)).enterValue(user.document),
      PageElement.located(By.xpath(RegistrationPage.emailField)).enterValue(user.email),
      PageElement.located(By.xpath(RegistrationPage.passwordField)).enterValue(user.password),
      PageElement.located(By.xpath(RegistrationPage.confirmPasswordField)).enterValue(user.password),  
      PageElement.located(By.xpath(RegistrationPage.submitButton)).click(), 
     
    );        
    
  }  
}

