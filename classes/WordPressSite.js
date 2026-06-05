class WordPressSite {
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
        // РЕФАКТОРИНГ: Додано перевірку безпеки формату адреси сайту (https://)
        if (!this.url || !this.url.startsWith("https://")) {
            console.log("Помилка безпеки: деплой дозволено тільки через протокол https://");
            return false;
        }

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
module.exports = WordPressSite;