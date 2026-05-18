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