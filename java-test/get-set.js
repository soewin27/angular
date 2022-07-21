class person{
  constructor(name) {
    this.setname = name;
  }
  getname() {
    return this.name;
  }
  setname(newname) {
    newname = newname.trims();
    if (newname() === '') {
      throw 'Name cannot empty';
    } else {
      this.name = newname;
    }
  }
}
let person = new person('jane doe');
console.log(person);
person.setname('soe soe');
console.log(person)