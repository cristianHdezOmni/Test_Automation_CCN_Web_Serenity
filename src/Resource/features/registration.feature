Feature: User Registration

  Background:
    Given the user is on the registration page

  @smoke @registration01
  Scenario: Successful user registration
    When the user registers with valid information:
      | firstName | lastName | dateOfBirth | document | password      |
      | User      | QARegresion | 15/05/1990  | 12345678 | Password123!  |
    Then the user should be successfully registered

  @smoke @registration01
  Scenario: Registration with duplicate email
    When the user tries to register with duplicate email "carlos.perez.testQA26@omni.pro"
    Then the system should show duplicate email error

  @smoke @registration01
  Scenario: Registration with invalid password - minimum length
    When the user tries to register with password "123"
    Then the system should show password minimum length error

  @smoke @registration
  Scenario: Registration with invalid password - complexity
    When the user tries to register with password "password"
    Then the system should show password complexity error

  @smoke @registration
  Scenario: Registration with invalid first name
    When the user tries to register with first name "#4Test$%"
    Then the system should show first name is not valid!

  @smoke @registration
  Scenario: Registration with invalid last name
    When the user tries to register with last name "#4Test$%"
    Then the system should show last name is not valid!

  @smoke @registration
  Scenario: Registration with invalid email
    When the user tries to register with email "invalid-email"
    Then the system should show email is not valid!
