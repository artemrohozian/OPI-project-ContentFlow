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