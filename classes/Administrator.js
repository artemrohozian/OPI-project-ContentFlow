const User = require('./User');

class Administrator extends User {
    constructor(adminId, email, passwordHash) {
        super(email, passwordHash);

        this.adminId = adminId;
    }

    manageUsers(users) {
        console.log("Список користувачів:");

        for (const user of users) {
            console.log(`- ${user.email}`);
        }
    }
}
module.exports = Administrator;
