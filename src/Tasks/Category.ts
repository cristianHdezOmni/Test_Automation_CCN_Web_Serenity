import { Task, Wait, Duration } from '@serenity-js/core';
import { By, PageElement, isVisible, Hover } from '@serenity-js/web';
import { CategoryPage } from '../PageObject/CategoryPage';

export class Category {
    static forShopping() {
        return Task.where(`#actor navigates to the Res category`,
            Wait.for(Duration.ofSeconds(8)),
            PageElement.located(By.xpath(CategoryPage.optionGoBackStore)).click(),
            Wait.for(Duration.ofSeconds(10)),
            Wait.until(PageElement.located(By.xpath(CategoryPage.menuToggle)), isVisible()),
            PageElement.located(By.xpath(CategoryPage.menuToggle)).click(),
            Wait.for(Duration.ofSeconds(3)),
            Wait.until(PageElement.located(By.xpath(CategoryPage.categoryCarnesPescadosMariscos)), isVisible()),
            Hover.over(PageElement.located(By.xpath(CategoryPage.categoryCarnesPescadosMariscos))),
            Wait.for(Duration.ofSeconds(3)),
            Wait.until(PageElement.located(By.xpath(CategoryPage.subCategoryRes)), isVisible()),
            PageElement.located(By.xpath(CategoryPage.subCategoryRes)).click(),
            Wait.for(Duration.ofSeconds(5)),
        );
    }
}