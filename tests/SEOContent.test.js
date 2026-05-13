const SEOContent = require('../classes/SEOContent');

describe('Тестування методу generateContent класу SEOContent', () => {

    
    // Техніка: Позитивний, BVA (Слово рівно 3 символи - на межі, і воно проходить!)
    test('Успішне додавання слова з мінімальною довжиною (3 символи)', () => {
        // Arrange (Підготовка)
        const seo = new SEOContent(103, 'Програмування');
        const keywords = ['SEO', 'Mac']; // Рівно 3 символи (межа)

        // Act (Дія)
        seo.generateContent(keywords);

        // Assert (Перевірка)
        expect(seo.bodyText).toContain('SEO');
        expect(seo.bodyText).toContain('Mac');
    });

    
    // Техніка: Негативний, EP (Передаємо зовсім неправильний тип даних, не масив)
    test('Помилка генерації, якщо передано null замість масиву', () => {
        // Arrange (Підготовка)
        const seo = new SEOContent(104, 'Помилка типу');
        const invalidData = null; // Негативний еквівалентний клас (не масив)

        // Act (Дія)
        seo.generateContent(invalidData);

        // Assert (Перевірка)
        // Оскільки метод видає return при null і не змінює текст, він має залишитися порожнім
        expect(seo.bodyText).toBe(""); 
    });

});