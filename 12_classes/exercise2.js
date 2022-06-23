class User {
  constructor(name) {
    this.name = name;

  }

  getName() {
    return this.name
  }


  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
}



class UserBase {

  constructor(users) {
    this.users = users;
  }

  count() {
    console.log(this.users.length);
  }

  getNames() {
    console.log(this.users.map(n => n.getName()));
  }

  getIntroductions(){
    console.log(this.users.map(n => n.getIntroduction()));
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);


userBase.count();
userBase.getNames();
userBase.getIntroductions();

