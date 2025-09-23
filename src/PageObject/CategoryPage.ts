export class CategoryPage {
  static readonly optionGoBackStore = '//span[contains(text(),"Regresar a la tienda")]';
  static readonly menuToggle = '//span[@class="action nav-toggle"]';
  static readonly categoryCarnesPescadosMariscos = '(//span[@class="category-name" and text()="Carnes, Pescados y Mariscos"])[1]';
  static readonly subCategoryRes = '(//span[@class="category-name" and text()="Res"])[1]';  
}