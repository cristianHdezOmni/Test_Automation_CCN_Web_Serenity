@capability:CheckoutProcess
@feature:Checkout
@story:FinalizePurchase
Feature: Checkout Process


  Background:
    Given the user opens the login page
    And the user logs in with username "omnitestqaevidencias@gmail.com" and password "secret_sauce_Omni"
    And the user has added a product to the cart
    

  
@RegresionOK @checkoutIII
Scenario: Validate delivery information in the Billing Address section
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart
  And the user will pick up the order
  And the user fills in the delivery information form with valid data
  Then the delivery information should be correctly displayed in the Billing Address section of the checkout page

@RegresionOK @checkoutIII
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty


@Regresion @checkoutDone
Scenario: Validate payment method selection in the checkout process
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart
  And the user will pick up the order
  And the user fills in the delivery information form with valid data
  And the user selects a payment method
  Then the available payment methods should be displayed 

@Regresion @checkoutDone
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty   

@RegresionOK @checkoutI
Scenario: Verify order summary before placing order
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart
  And the user will pick up the order
  And the user fills in the delivery information form with valid data  
  Then the order summary should display the total amount

@RegresionOK @checkoutI
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty


@RegresionOK @checkoutIII
Scenario: Place the order successfully
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart
  And the user will pick up the order
  And the user fills in the delivery information form with valid data  
  And the user selects a payment method
  And the user selects Credit Card as the payment method  
  And the user selects the option Desires fiscal receipt
  And the user clicks the Proceed to Payment button 
  And the user clicks in yes on the Credit Card 
  Then a confirmation message should be displayed
  And the order number should be generated


@RegresionOK @checkoutI
Scenario: Validate required delivery time in the Delivery Information section
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart    
  And the user clicks the continue button
  Then the message delivery time is mandatory "La hora de entrega es obligatorio" should be displayed

@RegresionOK @checkoutI
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty

@RegresionOK @checkoutI
Scenario: Validate required fiscal receipt option
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart    
  And the user fills in the delivery information form with valid data 
  And the user clicks the Proceed to Payment button
  Then validate that the message "Este es un campo obligatorio." is displayed in the fiscal receipt field


@RegresionOK @checkoutI
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty


@RegresionOK @checkout
Scenario: Validate card payment process with insufficient funds (DECLINED)
  Given the user clicks the Add to Cart button
  And the user views the cart
  When the user clicks the Proceed to Checkout button from the cart
  And the user fills in the delivery information form with valid data
  And the user selects a payment method
  And the user selects Credit Card as the payment method without Balance
  And the user selects the option Desires fiscal receipt
  And the user clicks the Proceed to Payment button
  #And the user clicks in yes on the Credit Card
  Then the payment should be declined with the message "FOUND - DECLINADA"

@RegresionOK @checkout
Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty



  #------RegresionOK testing-------------------------------


  @regressionOK @checkout
  Scenario: Verify Slot availability in checkout (Home Delivery)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select home delivery option 
    And the user clicks the Proceed to Checkout button from the cart    
    When the user selects a slot with available date and time
    Then the available slots should be displayed according to the selected date

  @regressionOK @checkout
  Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty

  @regressionOK @checkout
  Scenario: Verify Slot availability in checkout (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart
    And select pickup option
    And the user clicks the Proceed to Checkout button from the cart
    When the user selects a slot with available date and time
    Then the available slots should be displayed according to the selected date

  @regressionOK @checkout
  Scenario: Remove a product from the cart
   When the user clicks the Remove from Cart button
   Then the cart should be empty  

  @regressionOK01 @checkout
  Scenario: Verify Slot not in checkout (Home Delivery)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select home delivery option Slot not
    And the user clicks the Proceed to Checkout button from the cart
    When the user selects a slot with no available time
    Then a message should be displayed indicating no slots are available

  @regressionOK01 @checkout
 Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty

  @regressionOK @checkout
  Scenario: Verify Slot not available in checkout (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select pickup option 
    And the user clicks the Proceed to Checkout button from the cart
    When the user selects a slot with no available time
    Then a message should be displayed indicating no slots are available

   @regressionOK @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 

  @regressionOK @checkout
  Scenario: Verify Slot saved in quote (Home Delivery)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select home delivery option 
    And the user clicks the Proceed to Checkout button from the cart
    When the user fills in the delivery information form with valid data      
    Then the slot information should be saved in the quote and visible in the database
  
  @regressionOK @checkout
  Scenario: Remove a product from the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty  

  @regressionOK @checkout
  Scenario: Verify Slot saved in quote (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select pickup option  
    And the user clicks the Proceed to Checkout button from the cart   
    And the user will pick up the order
    When the user fills in the delivery information form with valid data
    Then the slot information should be saved in the quote and visible in the database

   @regressionOK @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 
 

  @regressionOK @checkout
  Scenario: Verify Slot change (Home Delivery)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select home delivery option 
    And the user clicks the Proceed to Checkout button from the cart
    When the user fills in the delivery information form with valid data    
    And the user changes to another available slot
    Then the slot should be updated without errors


  @regressionOK @checkout
  Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 


  @regressionOK @checkout
  Scenario: Verify Slot change (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select pickup option
    And the user clicks the Proceed to Checkout button from the cart
    And the user will pick up the order
    When the user fills in the delivery information form with valid data
    And the user changes to another available slot
    Then the slot should be updated without errors


  @regressionOK @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 
  

  @regressionOK01 @checkout
  Scenario: Verify order cannot proceed without slot(H.D.)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select home delivery option 
    And the user clicks the Proceed to Checkout button from the cart
    And the user clicks the continue button
    Then the message delivery time is mandatory "La hora de entrega es obligatorio" should be displayed

 @regressionOK01 @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 
   

  @regressionOK @checkout
  Scenario: Verify order cannot proceed without slot (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart   
    And select pickup option
    And the user clicks the Proceed to Checkout button from the cart
    And the user clicks the continue button
    Then the message delivery time is mandatory "La hora de entrega es obligatorio" should be displayed

 @regressionOK @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 
   

  @regressionOK @checkout
  Scenario: Verify order and creation in Instaleap (H.D.)
    Given the user clicks the Add to Cart button
    And the user views the cart
    And select home delivery option
    When the user clicks the Proceed to Checkout button from the cart
    And the user fills in the delivery information form with valid data
    And the user selects a payment method
    And the user selects Credit Card as the payment method  
    And the user selects the option Desires fiscal receipt
    And the user clicks the Proceed to Payment button  
    And the user clicks in yes on the Credit Card
    Then a confirmation message should be displayed
    And the order number should be generated    
    #Then the order should be created in Magento
    When the user go to the order details and get the detail values
    Then a Job should be created in Instaleap


 @regressionOK @checkout
   Scenario: Remove a product from the cart
    When the user clicks the Remove from Cart button
    Then the cart should be empty 
   

  @regressionOK @checkout
  Scenario: Verify order and Job creation in Instaleap (Pickup)
    Given the user clicks the Add to Cart button
    And the user views the cart
    And select pickup option
    When the user clicks the Proceed to Checkout button from the cart
    And the user will pick up the order
    And the user fills in the delivery information form with valid data    
    And the user selects a payment method
    And the user selects Credit Card as the payment method  
    And the user selects the option Desires fiscal receipt
    And the user clicks the Proceed to Payment button  
    And the user clicks in yes on the Credit Card
    Then a confirmation message should be displayed
    And the order number should be generated    
    #Then the order should be created in Magento
    When the user go to the order details and get the detail values
    Then a Job should be created in Instaleap
  

  @regressionOK @checkout
  Scenario: Verify order and Job creation in Instaleap (Home Delivery with Azul payment)
    When the user completes the checkout with Azul payment and home delivery
    Then the order should be created in Magento
    And a Job should be created in Instaleap

  @regressionOK @checkout
  Scenario: Verify order and Job creation in Instaleap (Pickup with Azul payment)
    When the user completes the checkout with Azul payment and pickup
    Then the order should be created in Magento
    And a Job should be created in Instaleap

  @regressionOK @checkout
  Scenario: Verify order and Job creation in Instaleap (Home Delivery with saved Azul card)
    When the user completes the checkout with Azul payment using a saved card and home delivery
    Then the order should be created in Magento
    And a Job should be created in Instaleap

  @regressionOK @checkout
  Scenario: Verify order and Job creation in Instaleap (Pickup with saved Azul card)
    When the user completes the checkout with Azul payment using a saved card and pickup
    Then the order should be created in Magento
    And a Job should be created in Instaleap

  @regressionOK @checkout
  Scenario: Verify order injection without duplicates to Instaleap
    When the user completes the checkout with Azul payment and home delivery
    Then only one Job should be created in Instaleap with correct payload
    And no duplicate Jobs should be created

  @regressionOK @checkout
  Scenario: Verify controlled retry in Instaleap injection failure
    Given Instaleap injection fails for a pickup order with Azul payment
    When the system retries according to the policy
    Then no more than one Job should be created for the same order
