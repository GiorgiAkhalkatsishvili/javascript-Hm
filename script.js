

const listContainer = document.querySelector(".listContainer");


const users = [
  { name: "John", surname: "Doe", age: 25, email: "john.doe@example.com" },
  { name: "Jane", surname: "Smith", age: 30, email: "jane.smith@example.com" },
  { name: "Alice", surname: "Johnson", age: 22, email: "alice.johnson@example.com" },
  { name: "Bob", surname: "Brown", age: 28, email: "bob.brown@example.com" },
  { name: "Charlie", surname: "Davis", age: 35, email: "charlie.davis@example.com" },
  { name: "Emily", surname: "Miller", age: 24, email: "emily.miller@example.com" },
  { name: "Michael", surname: "Wilson", age: 29, email: "michael.wilson@example.com" },
  { name: "Sophia", surname: "Moore", age: 26, email: "sophia.moore@example.com" },
  { name: "Liam", surname: "Taylor", age: 31, email: "liam.taylor@example.com" },
  { name: "Olivia", surname: "Anderson", age: 27, email: "olivia.anderson@example.com" },
  { name: "James", surname: "Thomas", age: 33, email: "james.thomas@example.com" },
  { name: "Mia", surname: "Jackson", age: 21, email: "mia.jackson@example.com" },
  { name: "Ethan", surname: "White", age: 32, email: "ethan.white@example.com" },
  { name: "Isabella", surname: "Harris", age: 23, email: "isabella.harris@example.com" },
  { name: "William", surname: "Martin", age: 34, email: "william.martin@example.com" }
];

users.forEach((person) => {
  const listElement = document.createElement("li");
  listElement.textContent = person.name;
  const surname = document.createElement("p");
  surname.textContent = person.surname;
  const age = document.createElement("p");
  age.textContent = person.age;
  const email = document.createElement("p");
  email.textContent = person.email;
  
  listElement.appendChild(surname);
  listElement.appendChild(age);
  listElement.appendChild(email);
  listContainer.appendChild(listElement);
})
