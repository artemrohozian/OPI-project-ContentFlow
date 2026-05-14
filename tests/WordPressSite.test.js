const WordPressSite = require('../classes/WordPressSite');
const SEOContent = require('../classes/SEOContent');

describe('Тестування методів класу WordPressSite', () => {

    // 5. Техніка: Позитивний, EP (Перевірка початкового стану)
    test('Новий сайт при створенні має статус "Не підключено"', () => {
        // Arrange
        const site = new WordPressSite(1, 'https://mysite.com');

        // Act
        const status = site.getStatus();

        // Assert
        expect(status).toBe("Не підключено");
        expect(site.isConnected).toBe(false);
    });

    // 6. Техніка: Позитивний, EP (Зміна стану після виклику методу)
    test('Метод connect() змінює статус на "Підключено"', () => {
        // Arrange
        const site = new WordPressSite(1, 'https://mysite.com');

        // Act
        site.connect();
        const status = site.getStatus();

        // Assert
        expect(status).toBe("Підключено");
        expect(site.isConnected).toBe(true);
    });

    // 7. Техніка: Негативний, EP (Публікація без підключення)
    test('Помилка deployContent, якщо сайт ще не підключений', () => {
        // Arrange
        const site = new WordPressSite(1, 'https://mysite.com');
        const content = new SEOContent(1, 'Тест');
        content.bodyText = "Готовий текст"; 

        // Act
        const result = site.deployContent(content);

        // Assert
        expect(result).toBe(false);
    });

    // 8. Техніка: Негативний, BVA (Граничне значення: порожній текст контенту)
    test('Помилка deployContent, якщо текст контенту порожній', () => {
        // Arrange
        const site = new WordPressSite(1, 'https://mysite.com');
        site.connect(); 
        const emptyContent = new SEOContent(1, 'Тест');
        emptyContent.bodyText = ""; // Межа - порожній рядок

        // Act
        const result = site.deployContent(emptyContent);

        // Assert
        expect(result).toBe(false);
    });
});