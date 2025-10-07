@capability:Authentication
@feature:Login
@story:UserAuthentication
Feature: User Login

  @Regresion @loginII
  Scenario: Successful login
    Given the user opens the login page
    When the user logs in with username "omnitestqaevidencias@gmail.com" and password "secret_sauce_Omni"    
    Then the greeting should contain "CrsitianTest HernandezTest"

  @Regresion @login
  Scenario: Unsuccessful login
    Given the user opens the login page
    When the user logs in with username "invalid_user@example.com" and password "wrong_password"
    Then the error message should be "El inicio de sesión de la cuenta fue incorrecto"
    

  @Regresion @login
  Scenario: Invalid password
    Given the user opens the login page
    When the user logs in with username "omnitestqaevidencias@gmail.com" and password "wrong_password"
    Then the error message should be "El inicio de sesión de la cuenta fue incorrecto"


  @Regresion @login
  Scenario: Invalid email
    Given the user opens the login page
    When the user logs in with username "invalid_user" and password "secret_sauce_Omni"
    Then the email field error message should be "Introduzca una dirección válida de correo electrónico (Ex: johndoe@domain.com)."

  @Regresion @login
  Scenario: Empty fields
    Given the user opens the login page
    When the user logs in with username "" and password ""
    Then the email field error message should be "Este es un campo obligatorio."
    Then the password field error message should be "Este es un campo obligatorio."
