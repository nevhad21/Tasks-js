var person = {
  name : 'Oleh',
  age : 35,
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`)
    console.groupEnd();
  }
}
var olha = {
  name: 'Olha',
  age: 30
}
// person.logInfo.bind(olha, "Manedger", "0633118628")();
// person.logInfo.call(olha, "Manedger", "0633118628");
person.logInfo.apply(olha, ["Manager", "0633118628"]);
