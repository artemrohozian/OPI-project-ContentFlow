const User = require('./User');

class Administrator extends User {
    constructor(adminId, email, passwordHash) {
        super(email, passwordHash);
        this.adminId = adminId;
    }

    // Метод для роботи з користувачами
    manageUsers(users) {
        console.log("Список користувачів:");

        // Виводимо пошту кожного користувача через цикл
        for (const user of users) {
            console.log(`- ${user.email}`);
        }
    }
}
module.exports = Administrator;
const User = require('./User');
const WordPressSite = require('./WordPressSite');

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
            if (!url || !url.startsWith("https://")) {
                throw new Error("Некоректний URL сайту");
            }

            // Перевіряємо довжину ключа (умова)
            if (apiKey.length < 5) {
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

class Preset {
    constructor(presetId, toneOfVoice, language) {
        this.presetId = presetId;
        this.toneOfVoice = toneOfVoice;
        this.language = language;
    }

    // Додаємо налаштування мови та тону до тексту
    applyToContent(content) {
        content.bodyText +=
            \n\n[Мова: ${this.language}, Tone: ${this.toneOfVoice}];
    }
}
module.exports = Preset;

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

        this.bodyText = SEO опис для товару "${this.title}":\n;

        // Проходимося по кожному слову через цикл
        for (const keyword of keywords) {
            // Додаємо слово, тільки якщо воно довше 2 символів
            if (keyword.length > 2) {
                this.bodyText += - Оптимізований опис для ключового слова "${keyword}".\n;
            }
        }

        console.log("Контент успішно згенеровано");
    }
}
module.exports = SEOContent;

class User {
    constructor(email, passwordHash) {
        // Не даємо створити просто "Користувача" без ролі
        if (new.target === User) {
            throw new Error("Неможливо створити об'єкт абстрактного класу User");
        }

        this.email = email;
        this.passwordHash = passwordHash;
    }

    // Метод для входу в систему
    login(inputEmail, inputPassword) {
        // Перевіряємо, чи співпадають пошта і пароль
        if (
            inputEmail === this.email &&
            inputPassword === this.passwordHash
        ) {
            console.log("Успішний вхід у систему");
            return true;
        }

        console.log("Невірний email або пароль");
        return false;
    }

    logout() {
        console.log("Користувач вийшов із системи");
    }
}
module.exports = User;

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