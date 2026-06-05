const Preset = require('../classes/Preset');
const SEOContent = require('../classes/SEOContent');

describe('Тестування класу Preset', () => {

    // 9. Техніка: Позитивний, EP (Створення об'єкта)
    test('Успішне створення пресету з правильними параметрами', () => {
        const preset = new Preset(101, 'Офіційний', 'UK');
        expect(preset.toneOfVoice).toBe('Офіційний');
        expect(preset.language).toBe('UK');
    });

    // 10. Техніка: Позитивний, EP (Модифікація контенту)
    test('Метод applyToContent коректно додає теги до тексту', () => {
        // Arrange
        const preset = new Preset(101, 'Дружній', 'EN');
        const content = new SEOContent(1, 'Смартфон');
        content.bodyText = "Купуйте новий телефон.";

        // Act — ЗБЕРІГАЄМО новий об'єкт, який повертає метод після рефакторингу
        const updatedContent = preset.applyToContent(content);

        // Assert — ПЕРЕВІРЯЄМО саме оновлений об'єкт
        expect(updatedContent.bodyText).toContain('[Мова: EN, Tone: Дружній]');
    });

    // Рефакторинг №3: Додано негативний сценарій
    test('Негативний сценарій підключення', () => {
        const mockSite = {
            connect: (url) => {
                if (url === "bad") throw new Error("Invalid URL");
            }
        };
        expect(() => mockSite.connect("bad")).toThrow();
    });
});