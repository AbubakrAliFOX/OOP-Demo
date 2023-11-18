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
  sayHi() {
    return `Hello, ${this.n}`;
  }
  printBankAccount() {
    return this.#bankAccount;
  }
}

class Admin extends User {
  constructor(id, name, salary, bankAccount, permissions) {
    super(id, name, salary, bankAccount);
    this.p = permissions;
  }
}

const user1 = new User(1, "John", 2000);
const user2 = new User(2, "Jack", 2000);
const user3 = new User(3, "Sam", 2000);
const user4 = new User(4, "", 2000);

////////////////////

const adminMain = new Admin(5, "Ahmad", 4000, "Access to all files");

// console.log(user4.summary());
// console.log(user4.editName("Jackyyy"));
// console.log(user4.summary());
// console.log(user4.n);

// console.log(User.count);

// console.log(user1.printBankAccount());
// console.log(adminMain.printBankAccount());

// console.log(Admin.prototype.sayHi);


// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
  }

  sleep() {
      this.energy += 10;
  }

  doSomethingFun() {
      this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
      super(name, age,energy)
      this.xp = xp;
      this.hourlyWage = hourlyWage;
  }

  goToWork() {
      this.xp += 10;
  }

}
// Task 3: Code an intern object, run methods
function intern() {
  const newWorker = new Worker(name= 'Bob', age= 21, energy= 110, xp= 0, hourlyWage= 10)
  newWorker.goToWork();
  return newWorker;
}

// Task 4: Code a manager object, methods
function manager() {
  newManagerdoSomethingFun()
  return newManager;
}
const newManager = new Worker()

console.log(intern());