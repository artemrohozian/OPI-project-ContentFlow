// Оновлені шляхи імпортів, щоб Jest точно знайшов файли твоїх класів
const Preset = require('../classes/Preset');
const SEOContent = require('../classes/SEOContent');

// Рефакторинг №3: Заміна дубльованого магічного рядка на константу TEST_USER
const TEST_USER = "testUser";

describe('Тестування класу Preset', () => {

    test('Успішне створення пресету з правильними параметрами', () => {
        const preset = new Preset(101, 'Офіційний', 'UK');
        expect(preset.toneOfVoice).toBe('Офіційний');
        expect(preset.language).toBe('UK');
    });

    test('Метод applyToContent коректно додає теги до тексту з використанням константи', () => {
        const preset = new Preset(101, 'Дружній', 'EN');
        const content = new SEOContent(1, 'Смартфон');
        
        // Використовуємо нашу константу замість сирого рядка
        content.bodyText = TEST_USER;

        preset.applyToContent(content);

        expect(content.bodyText).toContain('[Мова: EN, Tone: Дружній]');
        expect(content.bodyText).toContain(TEST_USER); // Перевірка стійкості константи
    });
});
