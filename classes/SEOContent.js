class SEOContent {
    constructor(contentId, title) {
        this.contentId = contentId;
        this.title = title;
        this.bodyText = "";
    }

    generateContent(keywords) {
        if (!Array.isArray(keywords) || keywords.length === 0) {
            console.log("Список ключових слів порожній");
            return;
        }

        this.bodyText = `SEO опис для товару "${this.title}":\n`;

        for (const keyword of keywords) {
            if (keyword.length > 2) {
                this.bodyText +=
                    `- Оптимізований опис для ключового слова "${keyword}".\n`;
            }
        }

        console.log("Контент успішно згенеровано");
    }
}