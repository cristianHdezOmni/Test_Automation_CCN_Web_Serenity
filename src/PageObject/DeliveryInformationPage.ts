export class DeliveryInformationPage {

  // Contenedor principal de la sección de fecha y hora
  static readonly deliverySection = '#instaleap_slots';
  // Selector de días (ejemplo: seleccionar el primer día disponible)
  static readonly firstAvailableDay = '(//ul/li/a[contains(@class, "nav-item")])[2]';
  static readonly secondAvailableDay = '(//ul/li/a[contains(@class, "nav-item")])[1]'; 

  // Selector de días sin disponibilidad (clase deshabilitada)
  static readonly noAvailableDay = '(//ul/li/a[contains(@class, "nav-item")])[6]';  
  // Selector de hora (ejemplo: seleccionar la franja activa o disponible)
  static readonly availableHourSlot = '(//div[contains(@class,"box-choice")][.//input[not(contains(@class,"box-disabled")) and not(@disabled)]]//input)[1]';
  static readonly availableHourSlotLabel = '(//div[contains(@class,"box-choice")][.//input[not(contains(@class,"box-disabled")) and not(@disabled)]]//label)[1]';

  static readonly secondAvailableHourSlot = '(//div[contains(@class,"box-choice")][.//input[not(contains(@class,"box-disabled")) and not(@disabled)]]//input)[2]';
  static readonly secondAvailableHourSlotLabel = '(//div[contains(@class,"box-choice")][.//input[not(contains(@class,"box-disabled")) and not(@disabled)]]//label)[2]';

  // Selector de la hora de recogida
  static readonly pickupTimeLabel = '//span[@data-bind="text: pickupTime"]';

  // Selector de horas sin disponibilidad
  static readonly noAvailableHourSlot = '//div[@class="not-available"]';
  
  static readonly allAvailableHourSlots = '//div[contains(@class,"box-choice")][.//input[not(contains(@class,"box-disabled")) and not(@disabled)]]//input';
  // Botón continuar
  static readonly continueButton = '(//button[@class="button action continue primary"])[2]';  
  // Selector de la región
  static readonly regionName = '//span[@class="region-name"]';
  // Opción de entrega a domicilio
  static readonly homeDeliveryOption = '//button[@class="action action-select-shipping"]';
  // Opción de recogida en tienda
  static readonly storePickupOption = '//button[@class="action action-select-pickup"]';
  // Selector de la dirección de entrega
  static readonly deliveryAddress = '(//div[@class="saved-addresses"])[4]';


  static readonly deliveryAddresSlotNots = '(//div[@class="saved-addresses"])[1]';
  // Botón guardar
  static readonly saveButton = '//button[@data-bind="click: updateAddress"]';
  // Mensaje de confirmación
  static readonly confirmationMessage = '//div[@id="popup-modal-message"]';
  // Botón de cerrar
  static readonly closeButton = '(//button[@class="action-close"])[4]';
  // Opción de recogida en tienda
  static readonly pickupOption = '//button[@class="action action-select-store-pickup"]';

  static readonly regionOptionSelect = '//select[@id="store-region-pickup"]';
  static readonly sourceOptionSelect = '//select[@id="store-source-pickup"]';
  // Botón para validar stock
  static readonly saveButtonPickup = '//button[@data-bind="click: validateStock"]';

  static readonly pickupConfirmationCheck = '*//input[@id="pickup-myself"]';

  static readonly telephoneInput = '(//input[@name="telephone" and @aria-required="true"])[1]';
  static readonly vatIdInput = '(//input[@name="vat_id"])[1]';

  static readonly goBackLink = '//div[@class="go-back-link-wrapper"]/a';


  /**
 * Retorna el XPath para seleccionar dinámicamente una opción en el dropdown de región
 * @param value Valor del atributo "value" de la opción
 */
static regionOptionValue(value: string) {
  return `//select[@id="store-region-pickup"]/option[@value="${value}"]`;
}

/**
 * Retorna el XPath de una opción específica en el dropdown de regiones
 * @param regionName Nombre visible de la región (ej: "Distrito Nacional")
 */
static regionOptionName(regionName: string) {
  return `//select[@id="store-region-pickup"]/option[normalize-space(text())="${regionName}"]`;
}

/**
 * Retorna el XPath de una opción dentro del select "Provincia"
 * @param provinceName Nombre exacto de la provincia (ej: "Distrito Nacional")
 */
static provinceOption(provinceName: string) {
  return `*//select[@id='store-source-pickup']/option[contains(.,"${provinceName}")]`;  
}




}
