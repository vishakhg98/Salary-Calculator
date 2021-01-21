function calculate() {
  // var empName = form.name.value;
  var empSalary = parseFloat(form.salary.value);
  var months = parseInt(form.months.value);

  if (isNaN(empSalary) || isNaN(months)) {
    totalSalary = "";
  } else {
    totalSalary = empSalary * months;
    // To add commas to salary
    totalSalary = totalSalary.toLocaleString();
  }
  // &#8377; <- Rupees unicode
  document.querySelector(".form__results").innerHTML =
    "Total Salary drawn &emsp;: &emsp; &#8377;" + totalSalary;
}
