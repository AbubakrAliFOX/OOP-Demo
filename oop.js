function User(id, name, salary) {
  this.i = id;
  this.n = name;
  this.s = salary;
}


const user1 = new User(1, 'John', 2000);
const user2 = new User(2, 'Jack', 2000);
const user3 = new User(3, 'Sam', 2000);

console.log(user1, user2, user3);
