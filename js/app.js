
document.getElementById('calculate-button').addEventListener('click', function(){
    let incomeText = document.getElementById('income-input');
    let incomeValue = parseFloat(incomeText.value);

    let foodText = document.getElementById('food-input');
    let foodCost = parseFloat(foodText.value);
    console.log(foodCost);
    let rentText = document.getElementById('rent-input');
    let rentCost = parseFloat(rentText.value);
    console.log(rentCost);
    let clothText = document.getElementById('cloth-input');
    let clothCost = parseFloat(clothText.value);
    console.log(clothCost);

    let totalCost = foodCost + rentCost + clothCost;
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