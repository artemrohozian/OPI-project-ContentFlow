const Client = require('../classes/Client');
const WordPressSite = require('../classes/WordPressSite');

describe('Тестування методу connectSite класу Client', () => {

    // Техніка: Позитивний, EP (Клас еквівалентності)
    test('Успішне підключення сайту з правильним URL та ключем', () => {
        // Arrange (Підготовка)
        const client = new Client(1, 'eva@mail.com', 'pass123', 'Pro');
        const validUrl = 'https://site.com';
        const validApiKey = 'apikey123';

        // Act (Дія)
        const result = client.connectSite(validUrl, validApiKey);

        // Assert (Перевірка)
        expect(result).toBe(true);
        expect(client.sites.length).toBe(1);
    });
 
    // Техніка: Негативний, BVA (Граничне значення - порожній рядок)
    test('Помилка підключення, якщо URL порожній', () => {
        // Arrange (Підготовка)
        const client = new Client(1, 'eva@mail.com', 'pass', 'Pro');
        const emptyUrl = '';
        const validApiKey = 'apikey123';

        // Act (Дія)
        const result = client.connectSite(emptyUrl, validApiKey);

        // Assert (Перевірка)
        expect(result).toBe(false);
    });

    // Техніка: Негативний, BVA (Граничне значення - 4 символи)
    test('Помилка підключення, якщо API ключ має 4 символи', () => {
        // Arrange (Підготовка)
        const client = new Client(1, 'eva@mail.com', 'pass', 'Pro');
        const validUrl = 'https://site.com';
        const shortApiKey = '1234';

        // Act (Дія)
        const result = client.connectSite(validUrl, shortApiKey);

        // Assert (Перевірка)
        expect(result).toBe(false);
    });
});