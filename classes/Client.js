const User = require('./User');
const WordPressSite = require('./WordPressSite');


function validateUrl(url){
    return url.startsWith("https://");
}
class Client extends User {
    constructor(clientId, email, passwordHash, tariffPlan) {
        super(email, passwordHash);
        this.clientId = clientId;
        this.tariffPlan = tariffPlan;
        this.sites = [];
    }

    // Метод для підключення сайту
    connectSite(url, apiKey) {
        try {
            // Перевіряємо, чи правильне посилання (умова)
            if (!url || !validateUrl(url)) {
                throw new Error("Некоректний URL сайту");
            }

            // Перевіряємо довжину ключа (умова)
            const MIN_API_KEY_LENGTH = 5;
            if (apiKey.length < MIN_API_KEY_LENGTH) {
                throw new Error("API ключ занадто короткий");
            }

            // Створюємо сайт і додаємо його в масив
            const site = new WordPressSite(this.sites.length + 1, url);
            site.connect();
            this.sites.push(site);

            console.log(`Сайт ${url} успішно підключено`);
            return true;

        } catch (error) {
            // Якщо щось пішло не так, ловимо помилку тут
            console.log("Помилка підключення:", error.message);
            return false;
        }
    }
}
module.exports = Client;