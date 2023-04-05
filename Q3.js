let basicMonthlySalary

let basicMonthlySalaryTax=function calculateTax(basicMonthlySalary){
    if (basicMonthlySalary=== <=24000){
        basicMonthlySalaryTax= (basicMonthlySalary*0.10)
        return basicMonthlySalaryTax
    }
    if (basicMonthlySalary=== >=24001 && <32333){
        basicMonthlySalaryTax= (basicMonthlySalary*0.25)
        return basicMonthlySalaryTax
    }
    if (basicMonthlySalary=== >32333){
        basicMonthlySalaryTax= (basicMonthlySalary*0.30)
        return basicMonthlySalaryTax
    }
}
let personalRelief= 2400;
let grossPay=  ()=> basicMonthlySalary+personalRelief;




let NHIFdeductions =function calculateNHIFdedeductions(grossPay){
  if(grossPay=== <5999){
    return 150
  }
  if(grossPay=== >=6000 && <7999){
    return 300
  }
  if(grossPay=== >=8000 && <11999){
    return 400
  }
  if(grossPay=== >=12000 && <14999){
    return 500
  }
  if(grossPay=== >=15000 && <19999){
    return 600
  }
  if(grossPay=== >=20000 && <24999){
    return 750
  }
  if(grossPay=== >=25000 && <29999){
    return 850
  }
  if(grossPay=== >=30000 && <34999){
    return 900
  }
  if(grossPay=== >=35000 && <39999){
    return 950
  }
  if(grossPay=== >=40000 && <44999){
    return 1000
  }
  if(grossPay=== >=45000 && <49999){
    return 1100
  }
  if(grossPay=== >=50000 && <59999){
    return 1200
  }
  if(grossPay=== >=6000 && <69999){
    return 1300
  }
  if(grossPay=== >=70000 && <79999){
    return 1400
  }
  if(grossPay=== >=80000 && <89999){
    return 1500
  }
  if(grossPay=== >=90000 && <99999){
    return 1600
  }
  if(grossPay=== >100000){
    return 1700
  }
}

let NSSFdeductions=function calculateNSSFdeductions(basicMonthlySalary){
    return(basicMonthlySalary*0.06)
}

let PAYE = ()=>{basicMonthlySalaryTax+NHIFdeductions+NSSFdeductions};
let netSalary=()=>{grossPay-PAYE};
