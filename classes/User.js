class User {
    constructor(email, passwordHash) {
        if (new.target === User) {
            throw new Error("Неможливо створити об'єкт абстрактного класу User");
        }

        this.email = email;
        this.passwordHash = passwordHash;
    }

    login(inputEmail, inputPassword) {
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