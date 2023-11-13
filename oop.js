

class User {
    constructor(id, name, salary) {
        this.i = id;
        this.n = name;
        this.s = salary + 1002;
    }
}


const user1 = new User(1, 'John', 2000);
const user2 = new User(2, 'Jack', 2000);
const user3 = new User(3, 'Sam', 2000);

console.log(user1.s, user2.s, user3.s);

