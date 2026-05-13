const User = require('./User');
const WordPressSite = require('./WordPressSite');
class Client extends User {
    constructor(clientId, email, passwordHash, tariffPlan) {
        super(email, passwordHash);

        this.clientId = clientId;
        this.tariffPlan = tariffPlan;
        this.sites = [];
    }
    connectSite(url, apiKey) {
        try {
            if (!url || !url.startsWith("https://")) {
                throw new Error("Некоректний URL сайту");
            }

            if (apiKey.length < 5) {
                throw new Error("API ключ занадто короткий");
            }

            const site = new WordPressSite(
                this.sites.length + 1,
                url
            );

            site.connect();

            this.sites.push(site);

            console.log(`Сайт ${url} успішно підключено`);

            return true;
        } catch (error) {
            console.log("Помилка підключення:", error.message);
            return false;
        }
    }
}

module.exports = Client;