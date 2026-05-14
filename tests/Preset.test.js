const Preset = require('../classes/Preset');
const SEOContent = require('../classes/SEOContent');

describe('Тестування класу Preset', () => {

    // 9. Техніка: Позитивний, EP (Створення об'єкта)
    test('Успішне створення пресету з правильними параметрами', () => {
        // Arrange & Act
        const preset = new Preset(101, 'Офіційний', 'UK');

        // Assert
        expect(preset.toneOfVoice).toBe('Офіційний');
        expect(preset.language).toBe('UK');
    });

    // 10. Техніка: Позитивний, EP (Модифікація контенту)
    test('Метод applyToContent коректно додає теги до тексту', () => {
        // Arrange
        const preset = new Preset(101, 'Дружній', 'EN');
        const content = new SEOContent(1, 'Смартфон');
        content.bodyText = "Купуйте новий телефон.";

        // Act
        preset.applyToContent(content);

        // Assert
        expect(content.bodyText).toContain('[Мова: EN, Tone: Дружній]');
    });
});