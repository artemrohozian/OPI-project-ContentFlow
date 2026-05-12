class WordPressSite {
    constructor(siteId, url) {
        this.siteId = siteId;
        this.url = url;
        this.isConnected = false;
    }

    connect() {
        this.isConnected = true;
    }
    deployContent(content) {
        if (!this.isConnected) {
            console.log("Сайт не підключений");
            return false;
        }

        if (!content.bodyText) {
            console.log("Контент порожній");
            return false;
        }

        console.log("Контент успішно опубліковано:");
        console.log(content.bodyText);

        return true;
    }

    getStatus() {
        return this.isConnected
            ? "Підключено"
            : "Не підключено";
    }
}