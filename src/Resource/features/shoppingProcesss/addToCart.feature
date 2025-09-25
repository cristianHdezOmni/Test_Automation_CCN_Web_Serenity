@capability:ShoppingProcess
@feature:AddToCart
#ShoppingCart
@story:AddProduct
Feature: add to cart 

Background:
 Given the user opens the login page
 And the user logs in with username "omnitestqaevidencias@gmail.com" and password "secret_sauce_Omni"    


@Reg @addToCart
Scenario: Add a product to the cart
  Given the user is on the product page
  When the user clicks the Add to Cart button
  Then the cart should contain the added product

@Reg @addToCart
Scenario: Remove a product from the cart
  Given the user has added a product to the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty

@Reg @addToCart
Scenario: Update the quantity of a product in the cart
  Given the user has added a product to the cart
  When the user updates the quantity
  Then the cart should reflect the updated quantity

@Reg @addToCart
Scenario: View cart contents
  Given the user has added a product to the cart
  When the user views the cart
  Then the cart should display the added product

@Reg @addToCart 
 Scenario: Total Purchase Summary
  Given the user has added a product to the cart
  When the user views the cart
  Then the total purchase summary should be displayed

@Reg @addToCart
Scenario: Remove a product from the cart
  Given the user has added a product to the cart
  When the user clicks the Remove from Cart button
  Then the cart should be empty
