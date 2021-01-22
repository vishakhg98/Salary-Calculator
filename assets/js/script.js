function calculate() {
  var empName = form.name.value;
  var empSalary = parseFloat(form.salary.value);
  var months = parseInt(form.months.value);

  totalSalary = empSalary * months;
  // To add commas to salary
  totalSalary = "&#8377;" + totalSalary.toLocaleString();
  // &#8377; <- Rupees unicode
  document.querySelector(
    ".form__results"
  ).innerHTML = `${empName}'s Total Salary &emsp;: &emsp; ${totalSalary}`;
}
