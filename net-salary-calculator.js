function netSalaryCalculator(){
  const basicSalary=parseFloat(prompt("Enter your basic salary"));
  const benefits=parseFloat(prompt("Enter your benefits"));
  const grossSalary = basicSalary + benefits;
  const nssf = grossSalary*0.06;
  const shif = grossSalary * 0.0275;
  let payee;
  //calculates the individual's payee
  switch (true){
    case grossSalary < 24000 :
      payee=grossSalary*0.1;
      break;
    case grossSalary <=32333 && grossSalary>=24001:
      payee=grossSalary*0.25;
      break;
    case grossSalary <=500000 && grossSalary>=32334:
      payee= grossSalary*0.3;
      break;
    case grossSalary <=800000 && grossSalary>=500001:
      payee=grossSalary*0.325;
      break;
    case grossSalary >800000:
      payee=grossSalary*0.35;
      break;
  }
  netSalary = grossSalary-payee-shif-nssf;
  return netSalary;
}

