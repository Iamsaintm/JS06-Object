console.log("Object Clone");

const todo = {
  task: "Do Hw",
  complete: false,
  due_date: "13-08-2023",
};

// const newTodo = todo;
// newTodo.complete = true;
// console.log(todo.complete);

// Clone
// // 1.เอาต้นแบบมา loop แล้ว assign ทีละ key:value ให้ object ใหม่
// const newTodo = {};

// for (let key in todo) {
//   // assign ทีละ key:value ให้ newTodo
//   newTodo[key] = todo[key];
//   // newTodo["task"] = todo["task"] => "Do HW"
//   // newTodo["complete"] = todo["complete] => false
//   // newTodo["due_date"] = todo["due_date"] => "13-08-2023"
// }

// console.log(newTodo);
// newTodo.complete = true;
// console.log(newTodo.complete);
// console.log(todo.complete);

// 2.Object.assign(dst, [src1,src2,...])

// 2A
// const newTodo = {};

// MERGE/OVERWRIDE Direction : RIGHT -> LEFT
// Object.assign(newTodo, todo);

// 2B
const newTodo = Object.assign({}, todo);
console.log(newTodo);
