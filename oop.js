class User {
  static count = 0;
  #bankAccount;
  constructor(id, name, salary) {
    this.i = id;
    this.n = name || "Unknown";
    this.s = salary < 5000 ? salary + 500 : salary;
    this.#bankAccount = 123456;
    User.count++;
  }
  sayHi () {
    return `Hello, ${this.n}`
  }
  printBankAccount () {
    return this.#bankAccount;
  }
}

class Admin extends User {
    constructor(id, name, salary, permissions) {
        super(id, name, salary);
        this.p = permissions;
    }
}

const user1 = new User(1, "John", 2000);
const user2 = new User(2, "Jack", 2000);
const user3 = new User(3, "Sam", 2000);
const user4 = new User(4, "", 2000);

////////////////////

const adminMain = new Admin(5,'Ahmad', 4000, 'Access to all files');

// console.log(user4.summary());
// console.log(user4.editName("Jackyyy"));
// console.log(user4.summary());
// console.log(user4.n);

// console.log(User.count);

console.log(user1.printBankAccount());