// const EmpName = document.querySelector("#name").innerHTML;
// console.log(EmpName);
// const sal = document.querySelector("#salary").value;
// console.log(sal);
// const yr = document.querySelector("#years").value;
// console.log(yr);

function calculate() {
  var empName = salaryform.name.value;
  var empSalary = parseFloat(salaryform.salary.value);
  var years = parseInt(salaryform.years.value);
  var months = parseInt(salaryform.months.value);
  console.log(empName, empSalary, years, months);
}
