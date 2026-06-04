const User = require('../classes/User');
const Client = require('../classes/Client'); // Використовуємо нащадка для тестування методів

describe('Тестування абстрактного класу User', () => {

    // 1. Техніка: Негативний, EP (Спроба ініціалізації абстрактного класу)
    test('Помилка при спробі створити об\'єкт класу User безпосередньо', () => {
        // Arrange & Act & Assert
        expect(() => {
            new User('test@mail.com', 'pass123');
        }).toThrow("Неможливо створити об'єкт абстрактного класу User");
    });

    // 2. Техніка: Позитивний, EP (Правильні дані для входу)
    test('Успішний логін з правильним email та паролем', () => {
        // Arrange
        const client = new Client(1, 'test@mail.com', 'pass123', 'Pro');
 
        // Act
        const result = client.login('test@mail.com', 'pass123');

        // Assert
        expect(result.success).toBe(true);
    });

    // 3. Техніка: Негативний, EP (Неправильний пароль)
    test('Помилка логіну, якщо введено неправильний пароль', () => {
        // Arrange
        const client = new Client(1, 'test@mail.com', 'pass123', 'Pro');

        // Act
        const result = client.login('test@mail.com', 'wrong_pass');

        // Assert
        expect(result.success).toBe(false);
        expect(result.message).toBe('Невірний email або пароль');
    });

    // 4. Техніка: Негативний, EP (Неправильний email)
    test('Помилка логіну, якщо введено неправильний email', () => {
        // Arrange
        const client = new Client(1, 'test@mail.com', 'pass123', 'Pro');

        // Act
        const result = client.login('wrong@mail.com', 'pass123');

        // Assert
        expect(result.success).toBe(false);
        expect(result.message).toBe('Невірний email або пароль');
    });
});