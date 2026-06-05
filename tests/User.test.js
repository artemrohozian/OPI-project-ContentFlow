const User = require('../classes/User');

class TestUser extends User {
    constructor(email, passwordHash) {
        super(email, passwordHash);
    }
}

describe('Тестування абстрактного класу User', () => {
    let testUserInstance; 

    beforeEach(() => {
        testUserInstance = new TestUser('test@mail.com', 'pass123');
    });

    test('Помилка при спробі створити обʼєкт класу User безпосередньо', () => {
        expect(() => {
            new User('test@mail.com', 'pass123');
        }).toThrow("Неможливо створити об'єкт абстрактного класу User");
    });

    test('Успішний логін з правильним email та паролем', () => {
        const result = testUserInstance.login('test@mail.com', 'pass123');
        expect(result).toBe(true);
    });
});
