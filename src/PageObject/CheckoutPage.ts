export class CheckoutPage {
  static readonly proceedToCheckoutButton = '//button[@data-role="proceed-to-checkout"]';
  static readonly shippingForm = '*//div[@class="billing-address-details"]';
  static readonly firstNameField = '#firstname';
  static readonly lastNameField = '#lastname';
  static readonly streetAddressField = '[name="street[0]"]';
  static readonly cityField = '#city';
  static readonly regionField = '#region_id';
  static readonly postcodeField = '#zip';
  static readonly telephoneField = '#telephone';
  static readonly nextStepButton = 'button.continue';
  static readonly paymentMethods = '//input[@name="payment[method]"]';
  static readonly reviewOrderSection = '.opc-block-summary';
  static readonly placeOrderButton = '//button[@title="Realizar Pedido"]';
  static readonly orderConfirmationMessage = '.checkout-success';
  static readonly orderNumber = '.order-number';
}
