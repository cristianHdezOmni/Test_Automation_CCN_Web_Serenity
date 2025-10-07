@capability:Authentication
@feature:Rgeistration
@story:NewUserRegistration
Feature: User Registration

  Background:
    Given the user is on the registration page

  @Regresion @registration01
  Scenario: Successful user registration
    When the user registers with valid information    
    Then the user should be successfully registered

  @Regresion @registration01
  Scenario: Registration with duplicate email
    When the user tries to register with duplicate email "carlos.perez.testQA26@omni.pro"
    Then the system should show duplicate email error

  @Regresion @registration01
  Scenario: Registration with invalid password - minimum length
    When the user tries to register with password "123"
    Then the system should show password minimum length error

  @Regresion @registration
  Scenario: Registration with invalid password - complexity
    When the user tries to register with password "password"
    Then the system should show password complexity error

  @Regresion @registration
  Scenario: Registration with invalid first name
    When the user tries to register with first name "#4Test$%"
    Then the system should show first name is not valid!

  @Regresion @registration
  Scenario: Registration with invalid last name
    When the user tries to register with last name "#4Test$%"
    Then the system should show last name is not valid!

  @Regresion @registration
  Scenario: Registration with invalid email
    When the user tries to register with email "invalid-email"
    Then the system should show email is not valid!
