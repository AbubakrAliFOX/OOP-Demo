class User {
  static count = 0;
  constructor(id, name, salary) {
    this.i = id;
    this.n = name || "Unknown";
    this.s = salary < 5000 ? salary + 500 : salary;
  }
  summary() {
    return `Hello, ${this.n}. You salalry is ${this.s} - ID: ${this.i}`;
  }
  editName(newName) {
    this.n = newName;
  }
}

const user1 = new User(1, "John", 2000);
const user2 = new User(2, "Jack", 2000);
const user3 = new User(3, "Sam", 2000);
const user4 = new User(4, "", 2000);

// console.log(user4.summary());
// console.log(user4.editName("Jackyyy"));
// console.log(user4.summary());
// console.log(user4.n);

console.log(User.count);
