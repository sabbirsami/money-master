function getInputValue(inputId){
    let incomeText = document.getElementById(inputId);
    let incomeValue = parseFloat(incomeText.value);
    return incomeValue
}
function getTotal(){
    let foodCost = getInputValue('food-input');
    let rentCost = getInputValue('rent-input');
    let clothCost =getInputValue('cloth-input');

    let totalCost = foodCost + rentCost + clothCost;
    return totalCost;
}


document.getElementById('calculate-button').addEventListener('click', function(){
    
    let incomeValue = getInputValue('income-input');
    let totalCost = getTotal()
    
    let totalExpensesFild = document.getElementById('total-expenses');
    let expensesText = parseFloat(totalExpensesFild.innerText);
    totalExpensesFild.innerText = totalCost;
    let balanceFild = document.getElementById('balance');
    balanceFild.innerText = incomeValue - totalCost;

})

document.getElementById('save-button').addEventListener('click',function(){
    let saveIncome = document.getElementById('save_income');
    let saveIncomeValue = parseFloat(saveIncome.value);
    console.log(saveIncomeValue);
    let incomeText = document.getElementById('income-input');
    let incomeValue = parseFloat(incomeText.value);
    console.log(incomeValue);
    let savingAmount = (incomeValue * saveIncomeValue) / 100;
    let totalSaved = document.getElementById('saved');
    totalSaved.innerText = savingAmount;

    //REMAINING BALANCE--------------------------------
    let remainingBalance = document.getElementById('remaining-balance');
    remainingBalance =balanceFild.innerText - totalSaved.innerText
})