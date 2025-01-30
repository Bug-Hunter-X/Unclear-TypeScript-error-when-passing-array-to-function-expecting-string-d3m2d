function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(", ");
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); // Correct usage, accessing the first element of the array
console.log(greeterArray(user));//Correct usage, using a function accepting arrays