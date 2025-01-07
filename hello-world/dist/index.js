"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Aashik", 0);
account.deposit(100);
console.log(account.balance);
console.log(typeof account);
//# sourceMappingURL=index.js.map