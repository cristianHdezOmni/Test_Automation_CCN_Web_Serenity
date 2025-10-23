export class PaymentPage {

  // --- Sección de dirección de facturación ---
  static readonly billingSection = '//div[@class="billing-address-details"]';  

  static readonly billingName = `${PaymentPage.billingSection}//div[@class="address-name"]`;
  static readonly billingPhone = `${PaymentPage.billingSection}//a[contains(@href,"tel:")]/span[2]`;
  static readonly billingRegion = `${PaymentPage.billingSection}//span[@data-bind="text: currentBillingAddress().region"]`;
  static readonly billingCountry = `${PaymentPage.billingSection}//span[contains(@class,"country")]`;          

  // --- Sección de información de entrega ---
  static readonly deliverySection = '//div[@class="slots-content" and @data-role="content"]';

  static readonly deliveryDay = `${PaymentPage.deliverySection}//div[@class="slot-information-complete"][1]//span`;
  static readonly deliveryTime = `${PaymentPage.deliverySection}//div[@class="slot-information-complete"][2]//span`;

  static readonly paymentMethodToggle = '//div[@id="checkout-payment-method-load"]';
  static readonly editPaymentMethod = '//div[@class="card-edit-link-wrapper"]//a[@title="Editar"]';

   static readonly cardTitle ='(//div[@class="cardlist-item-info"]//span[contains(@data-bind, "getCardTitle")])[1]';
  static readonly maskedCardNumber ='(//div[@class="cardlist-item-info"]//span[@class="cc-number"])[1]';
  static readonly cardExpiration ='(//div[@class="cardlist-item-info"]//span[@class="cc-expiration"])[1]';
  static readonly paymentMethods ='(//div[@class="cardlist-item-info"])[1]';

  // Resumen de compra
  static readonly orderSummaryTitle = '//div[@class="opc-block-summary"]//span[contains(text(),"Resumen de compra")]';
  static readonly orderSubtotal = "//tr[contains(@class,'totals sub')]//span[@class='price']";
  static readonly orderShipping = "//tr[contains(@class,'totals shipping')]//span[@class='price']";
  static readonly orderTotal = "//tr[contains(@class,'grand totals')]//span[@class='price']";

   /**
   * Seleccionar la tarjeta Visa terminada en 0007
   */
  static readonly creditCardWithBalanceRadio ='//div[@class="cardlist-item"]//span[@class="cc-number" and text()="0059"]/ancestor::div[@class="cardlist-item"]//input[@type="radio"]';

   /**
   * Seleccionar la tarjeta Visa terminada en 0129
   */
  static readonly creditCardWithoutBalanceRadio ='//div[@class="cardlist-item"]//span[@class="cc-number" and text()="0007"]/ancestor::div[@class="cardlist-item"]//input[@type="radio"]';

  /**
   * Botón Confirmar
   */
  static readonly confirmButton = '//div[@class="payment-method-content"]//button[contains(@class,"checkout")]//span[contains(text(),"Confirmar")]';

  /**
   * Botón Proceder al pago
   */
  static readonly proceedToPaymentButton = '//div[@class="opc-actions-payment-step"]//button[@title="Proceder al pago"]';
  
    
  // Nuevo locator para el radio "Sí, deseo comprobante fiscal"
  static readonly fiscalReceiptYes = '//input[@id="tax-receipt-yes"]';
  static readonly fiscalReceiptNo = '//input[@id="tax-receipt-no"]';

  static readonly ORDER_NUMBER = '//div[@class="order-code"]/p/span';
  static readonly SUCCESS_TITLE = '(//h2[@class="success-title"]/span)[1]';
  static readonly SUCCESS_MESSAGE = '//div[@class="success-order-container"]//h2[@class="success-title"]';

  // Método que construye el XPath dinámico recibiendo el texto esperado
  static deliveryTimeErrorMessage(message: string): string {
    return `*//div[@class="modal-inner-wrap"]/div[contains(.,'${message}')]`;
  }

  static fiscalReceiptErrorMessage(message: string): string {
    return `*//span[@data-bind="i18n: 'This is a required field.'" and contains(.,'${message}')]`;    
  }

  static readonly labelfiscalReceiptErrorMessage = '//span[@data-bind="i18n: \'This is a required field.\'"]';

  static paymentDeclinedErrorMessage(message: string): string {
    return `//div[@data-ui-id="checkout-cart-validationmessages-message-error" and contains(., "${message}")]`;
  }

    

   // --- Iframe de autenticación 3DS ---
  static readonly threeDSFrame = '*//iframe[@id="azulpayment-3ds-frame"]';
  static readonly confirmYesCreditCartVisa = '//*[@id="yes"]';

}
