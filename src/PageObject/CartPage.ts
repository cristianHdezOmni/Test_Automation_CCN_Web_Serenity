export class CartPage {
  static readonly cartCounterNumber = '//span[@class="counter-number"]';
  static readonly cartIcon = '//a[contains(@class,"action showcart")]';
  // Selector para identificar un producto en el carrito
  static readonly cartProductName = '//div[@class="info"]//strong/a';
  // Selector para el contenedor del carrito vacío
  static readonly emptyCartMessage = '//div[contains(@class, "cart-empty")]';  
  static readonly proceedToCheckoutButton = '(//button[@data-role="proceed-to-checkout"])[1]';
  static readonly totalPriceLabel = '//tr[contains(@class, "grand totals")]//span[contains(@class, "price")]';
  static readonly fallbackPriceSelectors: string[] =['//div[contains(@class, "price")]'];
  // ==== Total section locators ====
  static readonly totalSectionSelectors = '(//div[contains(@class, "cart-summary")])[1]';  

   /**
   * Retorna el XPath del botón "Añadir al carrito" para un producto específico
   * @param productName Nombre exacto del producto como aparece en el DOM
   */
  static addToCartButton(productName: string): string {
    return `//strong[@class="product name product-item-name"]
            [normalize-space(a/text())="${productName}"]
            /ancestor::div[contains(@class, "product-item-details")]
            //button[contains(@class, "tocart") and @title="Añadir al carrito"]`;
  }

  /**
   * Retorna el XPath del botón "Eliminar del carrito" para un producto específico
   * @param productName Nombre exacto del producto como aparece en el DOM
   */
  static decreaseQtyButton(productName: string) {
    return `//strong[@class="product name product-item-name"][normalize-space(a/text())="${productName}"]/ancestor::li[contains(@class,"product-item")]//button[contains(@class,"decrease-qty") and contains(@title,"Disminuir cantidad")]`;
  }

   /**
   * Retorna el XPath del mensaje que confirma que un producto fue agregado al carrito
   * @param productName Nombre exacto del producto como aparece en el mensaje
   */
  static productAddedMessage(productName: string): string {
    return `//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)" 
            and contains(normalize-space(.), "Se agrego ${productName}")]`;
  }
   
}