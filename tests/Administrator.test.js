const Administrator = require('../classes/Administrator');
const Client = require('../classes/Client');

describe('Тестування класу Administrator', () => {

    // Техніка: Позитивний, EP (Створення адміністратора)
    test('Успішне створення адміністратора', () => {

        // Arrange & Act
        const admin = new Administrator(
            1,
            'admin@mail.com',
            'admin123'
        );

        // Assert
        expect(admin.adminId).toBe(1);
        expect(admin.email).toBe('admin@mail.com');
    });

    // Техніка: Позитивний, EP (Перевірка методу manageUsers)
    test('Метод manageUsers коректно обробляє список користувачів', () => {

        // Arrange
        const admin = new Administrator(
            1,
            'admin@mail.com',
            'admin123'
        );

        const users = [
            new Client(1, 'user1@mail.com', '123', 'Pro'),
            new Client(2, 'user2@mail.com', '456', 'Basic')
        ];

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Act
        admin.manageUsers(users);

        // Assert
        expect(consoleSpy).toHaveBeenCalledWith('Список користувачів:');
        expect(consoleSpy).toHaveBeenCalledWith('- user1@mail.com');
        expect(consoleSpy).toHaveBeenCalledWith('- user2@mail.com');

        consoleSpy.mockRestore();
    });

    // Техніка: Негативний, BVA (Порожній список користувачів)
    test('Метод manageUsers працює навіть з порожнім списком', () => {

        // Arrange
        const admin = new Administrator(
            1,
            'admin@mail.com',
            'admin123'
        );

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Act
        admin.manageUsers([]);

        // Assert
        expect(consoleSpy).toHaveBeenCalledWith('Список користувачів:');

        consoleSpy.mockRestore();
    });
});