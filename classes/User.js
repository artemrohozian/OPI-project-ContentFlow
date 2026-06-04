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
        if (
            inputEmail === this.email &&
            inputPassword === this.passwordHash
        ) {
            return { success: true };
        }

        return {
            success: false,
            message: "Невірний email або пароль"
        };
    }

    logout() {
        return {
            success: true,
            message: "Користувач вийшов із системи"
        };
    }
}
module.exports = User;