import { Given, When, Then } from '@cucumber/cucumber';
import { Ensure, includes, equals } from '@serenity-js/assertions';
import { ProceedToCheckout } from '../Tasks/ProceedToCheckout';
import { SelectPaymentMethod } from '../Tasks/SelectPaymentMethod';
import { FillDeliveryInformation } from '../Tasks/FillDeliveryInformation';
import { SelectCreditCardTask } from '../Tasks/SelectCreditCardTask';
import { ProceedToPayment } from '../Tasks/ProceedToPayment';
import { SelectFiscalReceipt } from '../Tasks/SelectFiscalReceipt';
import { SelectDeliverySlot } from '../Tasks/SelectDeliverySlot';
import { AccessTheOrder } from '../Tasks/AccessTheOrder';
import { ReviewOrderSummary } from '../Questions/ReviewOrderSummary';
import { ReviewCheckoutPageLoaded } from '../Questions/ReviewCheckoutPageLoaded';
import { ReviewOrderConfirmation } from '../Questions/ReviewOrderConfirmation';
import { ReviewAndPaymentDetails } from '../Questions/ReviewAndPaymentDetails';
import { ReviewAndPaymentMethod } from '../Questions/ReviewAndPaymentMethod';
import { ReviewCheckoutError } from '../Questions/ReviewCheckoutError';
import { ReviewJob } from '../Questions/ReviewJob';
import { ReviewDeliverySlot } from '../Questions/ReviweDeliverySlot';
import { CustomWorld } from '../support/world';
import { Memory } from '../Utils/Memory';

When('the user clicks the Proceed to Checkout button from the cart', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        ProceedToCheckout.now()
    );
});

When('the user fills in the delivery information form with valid data', { timeout: 60000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        FillDeliveryInformation.withDefaultOptions()
    );
});

When('the user selects a payment method', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectPaymentMethod.toDisplayTheList()
    );
});

When('the user selects Credit Card as the payment method', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectCreditCardTask.withBalance()
    );
});

When('the user selects Credit Card as the payment method without Balance', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectCreditCardTask.withoutBalance()
    );
});

When('the user clicks the Proceed to Payment button', { timeout: 60000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        ProceedToPayment.confirmsThePayment()
    );
});

When('the user clicks in yes on the Credit Card', { timeout: 60000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        ProceedToPayment.confirmsThePaymentWithoutBalance()
    );
});

When('the user selects the option Desires fiscal receipt', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectFiscalReceipt.no()
    );
});

When('the user clicks the continue button', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        FillDeliveryInformation.clickContinueButton()
    );
});

Given('select home delivery option', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.homeDelivery()
    );
});

Given('select home delivery option Slot not', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.homeDeliverySlotNot()
    );
});

Given('select pickup option', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.pickup()
    );
});

When('the user will pick up the order', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.willPickUpTheOrder()
    );
});

Then('the delivery information should be correctly displayed in the Billing Address section of the checkout page', { timeout: 40000 }, async function (this: CustomWorld) {
    const isLoaded = await this.actor.answer(ReviewCheckoutPageLoaded.status());
    await this.actor.attemptsTo(
        Ensure.that(isLoaded, equals(true))
    );

    const billingOK = await this.actor.answer(
        ReviewAndPaymentDetails.hasBillingAddress(
            'CrsitianTest HernandezTest',
            '(875) 411 - 41',
            'Distrito Nacional',
            'República Dominicana'
        )
    );
    const deliveryOK = await this.actor.answer(ReviewAndPaymentDetails.hasDeliverySlot());

    await this.actor.attemptsTo(
        Ensure.that(billingOK, equals(true))
    );
    await this.actor.attemptsTo(
        Ensure.that(deliveryOK, equals(true))
    );
});

Then('the available payment methods should be displayed', { timeout: 40000 }, async function (this: CustomWorld) {
    const isPaymentMethodsVisible = await this.actor.answer(ReviewAndPaymentMethod.paymentMethodsVisible());
    await this.actor.attemptsTo(
        Ensure.that(isPaymentMethodsVisible, equals(true))
    );

    const cardTitleVisible = await this.actor.answer(ReviewAndPaymentMethod.cardTitle());
    await this.actor.attemptsTo(
        Ensure.that(cardTitleVisible, equals(true))
    );

    const maskedCardVisible = await this.actor.answer(ReviewAndPaymentMethod.maskedCardNumber());
    await this.actor.attemptsTo(
        Ensure.that(maskedCardVisible, equals(true))
    );

    const expirationVisible = await this.actor.answer(ReviewAndPaymentMethod.cardExpiration());
    await this.actor.attemptsTo(
        Ensure.that(expirationVisible, equals(true))
    );

    const allDetailsVisible = await this.actor.answer(ReviewAndPaymentMethod.allCardDetails());
    await this.actor.attemptsTo(
        Ensure.that(allDetailsVisible, equals(true))
    );
});

Then('the order summary should display the total amount', { timeout: 40000 }, async function (this: CustomWorld) {
    const isTotalVisible = await this.actor.answer(ReviewOrderSummary.totalVisible());
    await this.actor.attemptsTo(
        Ensure.that(isTotalVisible, equals(true))
    );

    const isAllSummaryDetails = await this.actor.answer(ReviewOrderSummary.allSummaryDetails());
    await this.actor.attemptsTo(
        Ensure.that(isAllSummaryDetails, equals(true))
    );
});

Then('a confirmation message should be displayed', { timeout: 40000 }, async function (this: CustomWorld) {
    const isMessage = await this.actor.answer(ReviewOrderConfirmation.confirmPaymentMessage());
    await this.actor.attemptsTo(
        Ensure.that(isMessage, equals(true))
    );
});

Then('the order number should be generated', { timeout: 40000 }, async function (this: CustomWorld) {
    const isOrderNumber = await this.actor.answer(ReviewOrderConfirmation.confirmOrderNumber());
    await this.actor.attemptsTo(
        Ensure.that(isOrderNumber, equals(true))
    );
});

Then('the message delivery time is mandatory {string} should be displayed', { timeout: 40000 }, async function (this: CustomWorld, message: string) {
    const isMessageDisplayed = await this.actor.answer(ReviewCheckoutError.confirmMessageDeliveryTimeIsMandatory(message));
    await this.actor.attemptsTo(
        Ensure.that(isMessageDisplayed, equals(true))
    );
});

Then('validate that the message {string} is displayed in the fiscal receipt field', { timeout: 40000 }, async function (this: CustomWorld, message: string) {
    const isVisibleMessage = await this.actor.answer(ReviewCheckoutError.isVisibleFiscalReceiptErrorMessage());
    await this.actor.attemptsTo(
        Ensure.that(isVisibleMessage, equals(true))
    );
    const isMessageDisplayed = await this.actor.answer(ReviewCheckoutError.confirmMessageFiscalReceiptIsMandatory(message));
    await this.actor.attemptsTo(
        Ensure.that(isMessageDisplayed, equals(true))
    );
});

Then('the payment should be declined with the message {string}', { timeout: 40000 }, async function (this: CustomWorld, message: string) {
    const isMessageDisplayed = await this.actor.answer(ReviewCheckoutError.confirmMessagePaymentDeclined(message));
    await this.actor.attemptsTo(
        Ensure.that(isMessageDisplayed, equals(true))
    );
});

When('the user selects a slot with available date and time', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.withAvailableDateAndTime()
    );
});

When('the user selects a slot with no available time', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.withNoAvailableTime()
    );
});

When('the user changes to another available slot', { timeout: 40000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        SelectDeliverySlot.withAnotherAvailableTime()
    );
});

Then('the available slots should be displayed according to the selected date', { timeout: 40000 }, async function (this: CustomWorld) {
    const areSlotsDisplayed = await this.actor.answer(ReviewDeliverySlot.areSlotsDisplayed());
    console.log('Available slots displayed:', areSlotsDisplayed);
    await this.actor.attemptsTo(
        Ensure.that(areSlotsDisplayed, equals(true))
    );

    const countAvailableSlots = await this.actor.answer(ReviewDeliverySlot.countAvailableSlots());
    console.log('Cantidad de slots disponibles:', countAvailableSlots);
    await this.actor.attemptsTo(
        Ensure.that(countAvailableSlots > 0, equals(true))
    );
});

Then('a message should be displayed indicating no slots are available', { timeout: 40000 }, async function (this: CustomWorld) {
    const isMessageDisplayed = await this.actor.answer(ReviewDeliverySlot.isNoSlotsAvailableMessageDisplayed());
    await this.actor.attemptsTo(
        Ensure.that(isMessageDisplayed, equals(true))
    );
});

Then('the slot information should be saved in the quote and visible in the database', { timeout: 40000 }, async function (this: CustomWorld) {
    const isSlotSaved = await this.actor.answer(ReviewDeliverySlot.isSlotSavedInQuote());
    console.log('isSlotSaved: ', isSlotSaved);
    const deliveryHour = Memory.recall('deliveryHour') as string;
    console.log(`🕒 Hora de entrega memory recall: ${deliveryHour}`);
    await this.actor.attemptsTo(
        Ensure.that(isSlotSaved, includes(deliveryHour))
    );
});

Then('the slot should be updated without errors', { timeout: 40000 }, async function (this: CustomWorld) {
    const isSlotSaved = await this.actor.answer(ReviewDeliverySlot.isSlotSavedInQuote());
    console.log('isSlotSaved: ', isSlotSaved);
    const deliveryHour = Memory.recall('deliveryHour') as string;
    console.log(`🕒 Hora de entrega memory recall: ${deliveryHour}`);
    await this.actor.attemptsTo(
        Ensure.that(isSlotSaved, includes(deliveryHour))
    );
});

Then('the order should be created in Magento', { timeout: 40000 }, async function (this: CustomWorld) {
    /*const isOrderCreated = await this.actor.answer(ReviewOrder.isOrderCreatedInMagento());
    await this.actor.attemptsTo(
        Ensure.that(isOrderCreated, equals(true))
    );*/
});

When('the user go to the order details and get the detail values', { timeout: 50000 }, async function (this: CustomWorld) {
    await this.actor.attemptsTo(
        AccessTheOrder.GetOrderDetails()
    );
    //await this.actor.attemptsTo(AccessTheOrder.GoOrderDetails());
});

Then('a Job should be created in Instaleap', { timeout: 40000 }, async function (this: CustomWorld) {
    const isJobCreated = await this.actor.answer(ReviewJob.withCredentialsAndIsJobCreatedInInstaleap('omnipro@omnipro.com', 'Omni2025.'));
    await this.actor.attemptsTo(
        Ensure.that(isJobCreated, equals(true))
    );
});