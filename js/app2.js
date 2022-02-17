function getValueAmount(valueName){
    const inputValue = document.getElementById(valueName);
    const valueText = parseFloat(inputValue.value);
    return valueText;
}


document.getElementById('calculate-button').addEventListener('click', function(){
    const totalInput = getValueAmount('income-input');
    
    // GET COST ---------------------------------------
    const foodCost = getValueAmount('food-input');
    const rentCost = getValueAmount('rent-input');
    const clothCost = getValueAmount('cloth-input');

    // TOTAL EXPENSES MULTIPLICATION-------------------
    let totalCost = foodCost + rentCost + clothCost;
    let totalExpensesFild = document.getElementById('total-expenses');
    let expensesText = parseFloat(totalExpensesFild.innerText);
    totalExpensesFild.innerText = totalCost;

    //BALANCE------------------------------------------
    let balanceFild = document.getElementById('balance');
    balanceFild.innerText = totalInput - totalCost;
})

    // SAVE MONEY--------------------------------------
document.getElementById('save-button').addEventListener('click',function(){
    let saveIncome = getValueAmount('save_income');
    const totalInput = getValueAmount('income-input');
    let savingAmount = (totalInput * saveIncome) / 100;
    let totalSaved = document.getElementById('saved');
    totalSaved.innerText = savingAmount;

    //REMAINING BALANCE--------------------------------
    let remainingBalance = document.getElementById('remaining-balance');
    remainingBalance =balanceFild.innerText - totalSaved.innerText
})
    