export class OrderDetailsPage {
    // Page object for the order details page
    static readonly VIEW_ORDER_BUTTON = '//div[@class="view-order"]/a[@class="action primary checkout"]';
    static readonly ORDER_REFERENCE = '//div[@data-test="order-reference"]/h5';
    static readonly TOTAL_PRICE = '//div/h5[@data-test="total-price"]';

    static readonly MY_ORDERS_SECTION = '*//li/a[contains(.,"Mis ordenes")]';
    static readonly VIEW_ORDER_BUTTON_IN_MY_ORDERS = '//td[@data-th="Orden #" and contains(text(),"STG8000282317")]/..//a//span[contains(text(),"Ver orden")]';

    static readonly NUMBER_ORDER = (numberOrder: string): string => {
      return `*//span[@id="show-job" and contains(text(),"${numberOrder}")]`;
    }

    static readonly ORDER_VALUE = (orderValue: string): string => {
      return `*//button[contains(.,"${orderValue}")]`;
    }

    static readonly NUMBER_ORDER_DETAIL = (orderNumber: string): string => {
      return `(//span[contains(text(),"${orderNumber}")])[2]`;
    }

    static readonly NUMBER_ORDER_II = '*//span[@id="show-job" and contains(text(),"STG8000282317")]';

}

