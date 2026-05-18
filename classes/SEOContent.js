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
module.exports = SEOContent;