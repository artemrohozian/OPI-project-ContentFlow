const Client = require('../classes/Client');

describe('Тестування методу connectSite класу Client', () => {
    test('Успішне підключення сайту з правильним URL та ключем', () => {
        const client = new Client(1, 'eva@mail.com', 'pass123', 'Pro');
        const result = client.connectSite('https://site.com', 'apikey123');
        expect(result).toBe(true);
    });

    test('Помилка підключення, якщо URL порожній', () => {
        const client = new Client(1, 'eva@mail.com', 'pass', 'Pro');
        const result = client.connectSite('', 'apikey123');
        expect(result).toBe(false);
    });
});

