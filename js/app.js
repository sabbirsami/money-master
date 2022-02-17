function getInputValue(inputId){
    let incomeText = document.getElementById(inputId);
    let incomeValue = parseFloat(incomeText.value);
    return incomeValue
}
// TOTAL EXPENSES MULTIPLICATION-------------------
function getTotalCost(){
    let foodCost = getInputValue('food-input');
    let rentCost = getInputValue('rent-input');
    let clothCost =getInputValue('cloth-input');

    if(foodCost > 0 && rentCost > 0 && clothCost > 0){
        let totalCost = foodCost + rentCost + clothCost;
        document.getElementById('invalid-worning').classList.add('d-none');
        return totalCost;
    }
    else{
        document.getElementById('invalid-worning').classList.remove('d-none');
    }
}
//BALANCE------------------------------------------
function getBalance (){
    let incomeValue = getInputValue('income-input');
    if(incomeValue > 0){
        let totalBalance = incomeValue - getTotalCost();
        return totalBalance;
    }
    else{
        document.getElementById('invalid-worning').classList.remove('d-none');
    }
}

document.getElementById('calculate-button').addEventListener('click', function(){  
    let totalCost = getTotalCost()
    let totalExpensesFild = document.getElementById('total-expenses');
    totalExpensesFild.innerText = totalCost;
    let balanceFild = document.getElementById('balance');
    balanceFild.innerText = getBalance();
})

// SAVE MONEY--------------------------------------
document.getElementById('save-button').addEventListener('click',function(){
    let saveIncomeValue = getInputValue('save_income');
    let incomeValue = getInputValue('income-input');

    let savingAmount = (incomeValue * saveIncomeValue) / 100;
    let balance = getBalance();
    if(savingAmount > balance){
        document.getElementById('save-worning').classList.remove('d-none')
    }
    else{
        let totalSaved = document.getElementById('saved');
        totalSaved.innerText = savingAmount;
    }

    //REMAINING BALANCE--------------------------------
    let remainingBalance = document.getElementById('remaining-balance');
    let totalSaved = document.getElementById('saved');
    remainingBalance.innerText = getBalance() - totalSaved.innerText
})