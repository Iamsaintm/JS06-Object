// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

// ```js
const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};
// ```

const searchEmployee = (name) => {
  const employee = employees[name];

  if (employee) {
    console.log(`Name: ${name}`);
    console.log(`Salary: ${employee.salary}`);
    console.log(
      `Address: ${employee.address.district}, ${employee.address.province}`
    );
  } else {
    console.log("Not Found");
  }
};

const inputName = prompt("Enter employee name:");
searchEmployee(inputName);
