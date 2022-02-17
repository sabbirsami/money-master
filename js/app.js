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

    if(foodCost >= 0 && rentCost >= 0 && clothCost >= 0){
        let totalCost = foodCost + rentCost + clothCost;
        document.getElementById('invalid-worning').classList.add('d-none');
        return totalCost;
    }
    else{
        document.getElementById('invalid-worning').classList.remove('d-none');
    }
}
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
    // TOTAL EXPENSES
    if(totalCost >= 0){
        let totalExpensesFild = document.getElementById('total-expenses');
        totalExpensesFild.innerText = totalCost;
    }
    else{
    };
    //BALANCE
    if(totalCost >= 0){
        let balanceFild = document.getElementById('balance');
        document.getElementById('balance-error').classList.add('d-none')
        balanceFild.innerText = getBalance();
    }
    else{
        document.getElementById('balance-error').classList.remove('d-none')
    }
})

// SAVE MONEY--------------------------------------
document.getElementById('save-button').addEventListener('click',function(){
    let saveIncomeValue = getInputValue('save_income');
    let incomeValue = getInputValue('income-input');

    let savingAmount = (incomeValue * saveIncomeValue) / 100;
    let balance = getBalance();
    if(saveIncomeValue >0){
        if(savingAmount > balance){
            document.getElementById('save-worning').classList.remove('d-none');
        }
        else{
            // SAVING AMOUNT
            let totalSaved = document.getElementById('saved');
            document.getElementById('save-worning').classList.add('d-none');
            totalSaved.innerText = savingAmount;
            //REMAINING BALANCE--------------------------------
            let remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = getBalance() - totalSaved.innerText
        }    
    }
    else{
        document.getElementById('save-error').classList.remove('d-none');
    }
})