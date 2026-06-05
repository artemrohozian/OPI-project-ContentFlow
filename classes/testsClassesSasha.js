class SEOContent {

constructor(contentId, title) {

this.contentId = contentId;

this.title = title;

this.bodyText = "";

}



// Метод для створення SEO-тексту

generateContent(keywords) {

// Якщо масив слів порожній, то нічого не робимо

if (!Array.isArray(keywords) || keywords.length === 0) {

console.log("Список ключових слів порожній");

return;

}



this.bodyText = `SEO опис для товару "${this.title}":\n`;



// Проходимося по кожному слову через цикл

for (const keyword of keywords) {

// Додаємо слово, тільки якщо воно довше 2 символів

if (keyword.length > 2) {

this.bodyText += `- Оптимізований опис для ключового слова "${keyword}".\n`;

}

}



console.log("Контент успішно згенеровано");

}

}

module.exports = SEOContent; class Preset {

constructor(presetId, toneOfVoice, language) {

this.presetId = presetId;

this.toneOfVoice = toneOfVoice;

this.language = language;

}



// Додаємо налаштування мови та тону до тексту

applyToContent(content) {

content.bodyText +=

`\n\n[Мова: ${this.language}, Tone: ${this.toneOfVoice}]`;

}

}

module.exports = Preset; class WordPressSite {

constructor(siteId, url) {

this.siteId = siteId;

this.url = url;

this.isConnected = false;

}



connect() {

this.isConnected = true;

}



// Метод для публікації контенту

deployContent(content) {

// Перевіряємо, чи взагалі підключений сайт

if (!this.isConnected) {

console.log("Сайт не підключений");

return false;

}



// Перевіряємо, чи є текст для публікації

if (!content.bodyText) {

console.log("Контент порожній");

return false;

}



console.log("Контент успішно опубліковано:");

console.log(content.bodyText);

return true;

}



getStatus() {

return this.isConnected ? "Підключено" : "Не підключено";

}

}

module.exports = WordPressSite; const SEOContent = require('../classes/SEOContent');



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



}); const Preset = require('../classes/Preset');

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

