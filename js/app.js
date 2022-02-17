function getInputValue(inputId){
    let incomeText = document.getElementById(inputId);
    let incomeValue = parseFloat(incomeText.value);
    return incomeValue
}
function getTotalCost(){
    let foodCost = getInputValue('food-input');
    let rentCost = getInputValue('rent-input');
    let clothCost =getInputValue('cloth-input');

    let totalCost = foodCost + rentCost + clothCost;
    return totalCost;
}
function getBalance (){
    let incomeValue = getInputValue('income-input');
    let totalBalance = incomeValue - getTotalCost();
    return totalBalance;
}


document.getElementById('calculate-button').addEventListener('click', function(){
    
    let totalCost = getTotalCost()
    
    let totalExpensesFild = document.getElementById('total-expenses');
    let expensesText = parseFloat(totalExpensesFild.innerText);
    totalExpensesFild.innerText = totalCost;

    let balanceFild = document.getElementById('balance');
    balanceFild.innerText = getBalance();
    

})

document.getElementById('save-button').addEventListener('click',function(){
    let saveIncomeValue = getInputValue('save_income');
    let incomeValue = getInputValue('income-input');
    let savingAmount = (incomeValue * saveIncomeValue) / 100;
    let totalSaved = document.getElementById('saved');
    totalSaved.innerText = savingAmount;

    //REMAINING BALANCE--------------------------------
    let remainingBalance = document.getElementById('remaining-balance');
    remainingBalance =balanceFild.innerText - totalSaved.innerText
})