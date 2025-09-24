import { Task, Wait, Duration, Interaction } from '@serenity-js/core';
import { By, PageElement, isVisible } from '@serenity-js/web';
import { OrderDetailsPage } from '../PageObject/OrderDetailsPage';
import { Memory } from '../Utils/Memory';
import { CsvDataManager } from '../Utils/CsvDataManager';

export class AccessTheOrder {
    static GoOrderDetails() {
        return Task.where(`#actor goes to order details from my orders`,
            
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.MY_ORDERS_SECTION)), isVisible()),
            PageElement.located(By.xpath(OrderDetailsPage.MY_ORDERS_SECTION)).click(),
            Wait.for(Duration.ofSeconds(7)),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.VIEW_ORDER_BUTTON_IN_MY_ORDERS)), isVisible()),
            PageElement.located(By.xpath(OrderDetailsPage.VIEW_ORDER_BUTTON_IN_MY_ORDERS)).click(),
            Wait.for(Duration.ofSeconds(2)),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.ORDER_REFERENCE)), isVisible()),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.TOTAL_PRICE)), isVisible()),
            Interaction.where(`#actor processes order data`, async (actor) => {
                const orderElement = PageElement.located(By.xpath(OrderDetailsPage.ORDER_REFERENCE));
                const priceElement = PageElement.located(By.xpath(OrderDetailsPage.TOTAL_PRICE));
                
                const orderReference = await actor.answer(orderElement.text());
                const orderNumber = (orderReference || '').replace('#', '').trim();
                console.log('Order Number:', orderNumber);
                Memory.remember('orderNumber', orderNumber);

                const totalPrice = await actor.answer(priceElement.text());
                const orderTotal = (totalPrice || '')
                    .replace('DOP', '')
                    .replace(',', '.')
                    .trim();
                
                console.log('Total Price:', orderTotal);
                const orderTotalNumber = parseFloat(orderTotal);
                console.log('Total Price (number):', orderTotalNumber);
                Memory.remember('orderTotal', orderTotal);
            }),
            Interaction.where(`#actor updates CSV with hardcoded data`, () => {
                const csvManager = new CsvDataManager('../features/data/testData.csv');
                
                console.log(csvManager.getAll());
                
                const userData = csvManager.findBy('email', 'qa_user@test.com');
                console.log('Usuario encontrado:', userData);
                
                csvManager.updateRow('email', 'qa_user@test.com', {
                    orderNumber: 'STG8000282317',
                    totalPrice: '444.95',
                    status: 'COMPLETED'
                });
                
                console.log('✅ Fila actualizada correctamente');
            })
        );
    }

    static GetOrderDetails() {
        return Task.where(`#actor gets order details and updates CSV with dynamic data`,
            Wait.for(Duration.ofSeconds(5)),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.VIEW_ORDER_BUTTON)), isVisible()),
            PageElement.located(By.xpath(OrderDetailsPage.VIEW_ORDER_BUTTON)).click(),
            Wait.for(Duration.ofSeconds(10)),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.ORDER_REFERENCE)), isVisible()),
            Wait.until(PageElement.located(By.xpath(OrderDetailsPage.TOTAL_PRICE)), isVisible()),
            Interaction.where(`#actor processes order data`, async (actor) => {
                const orderElement = PageElement.located(By.xpath(OrderDetailsPage.ORDER_REFERENCE));
                const priceElement = PageElement.located(By.xpath(OrderDetailsPage.TOTAL_PRICE));
                
                const orderReference = await actor.answer(orderElement.text());
                const orderNumber = (orderReference || '').replace('#', '').trim();
                console.log('Order Number:', orderNumber);
                Memory.remember('orderNumber', orderNumber);

                const totalPrice = await actor.answer(priceElement.text());
                const orderTotal = (totalPrice || '')
                    .replace('DOP', '')
                    .replace(',', '.')
                    .trim();
                
                console.log('Total Price:', orderTotal);
                const orderTotalNumber = parseFloat(orderTotal);
                console.log('Total Price (number):', orderTotalNumber);
                Memory.remember('orderTotal', orderTotal);
            }),
            Interaction.where(`#actor updates CSV with dynamic order data`, () => {
                const csvManager = new CsvDataManager('../features/data/testData.csv');
                
                const orderNumber = Memory.recall('orderNumber') as string;
                const orderTotal = Memory.recall('orderTotal') as string;
                
                console.log(csvManager.getAll());
                
                const userData = csvManager.findBy('email', 'qa_user@test.com');
                console.log('Usuario encontrado:', userData);
                
                csvManager.updateRow('email', 'qa_user@test.com', {
                    orderNumber: orderNumber,
                    totalPrice: orderTotal,
                    status: 'COMPLETED'
                });
                
                console.log('✅ CSV actualizado con datos dinámicos:', { orderNumber, orderTotal });
            })
        );
    }
}