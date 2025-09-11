
import { Task, Wait, Duration} from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { RegistrationPage } from '../PageObject/RegistrationPage';
import { User } from '../Model/User';

export class RegisterUser {    

    static withData(user: User) {
      console.log('Email; ',user.email)
    return Task.where(`#actor registers a new user`,

      Wait.for(Duration.ofSeconds(8)),
      Wait.until(PageElement.located(By.xpath(RegistrationPage.firstNameField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.firstNameField)).enterValue(user.firstName),

      Wait.until(PageElement.located(By.xpath(RegistrationPage.lastNameField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.lastNameField)).enterValue(user.lastName),

      Wait.until(PageElement.located(By.xpath(RegistrationPage.dobField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.dobField)).enterValue(user.dateOfBirth),

      Wait.until(PageElement.located(By.xpath(RegistrationPage.documentField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.documentField)).enterValue(user.document),

      Wait.until(PageElement.located(By.xpath(RegistrationPage.emailField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.emailField)).enterValue(user.email),

      Wait.until(PageElement.located(By.xpath(RegistrationPage.passwordField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.passwordField)).enterValue(user.password),
      
      Wait.until(PageElement.located(By.xpath(RegistrationPage.confirmPasswordField)), isVisible()),
      PageElement.located(By.xpath(RegistrationPage.confirmPasswordField)).enterValue(user.password),
            
      PageElement.located(By.xpath(RegistrationPage.submitButton)).click(), 
      Wait.for(Duration.ofSeconds(6)),     
     
    );        
    
    
  }  
}

