const user = {
  firstName: "Codecamp",
  lastName: "Software park",
  age: 15,
};

// For IN : Loop through Object
// for (let <key_variable> in <object>) {}

for (key in user) {
  console.log(`KEY : ${key}`); // dynamics assign by JS
  // 1st : let key = "firstName"
  // 2nd : let key = "lastName"
  // 3rd : let key = "age"

  console.log(`VAL : ${user[key]}`); // need to access by bracket , computed key
  // 1st : user[key] == user["firstname"] ==> Codecamp
  // 2nd : user[key] == user["lastName"] ==> Software park
  // 3rd : user[key] == user["age"] ==> 15

  console.log(user.key);
  // 1st : user.key == user["key"] ==> undefined
  // 2nd : user.key == user["key"] ==> undefined
  // 3rd : user.key == user["key"] ==> undefined
}
