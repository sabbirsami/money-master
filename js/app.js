function getInputValue(inputId){
    let incomeText = document.getElementById(inputId);
    let incomeValue = parseFloat(incomeText.value);
    return incomeValue
}
function getError(errorId){
    let error = document.getElementById(errorId).classList.remove('d-none');
    return error;
}
function removeError(removeErrorId){
    let removeError = document.getElementById(removeErrorId).classList.add('d-none');
    return removeError;
}

// TOTAL EXPENSES MULTIPLICATION-------------------
function getTotalCost(){
    let foodCost = getInputValue('food-input');
    let rentCost = getInputValue('rent-input');
    let clothCost =getInputValue('cloth-input');

    if(foodCost >= 0 && rentCost >= 0 && clothCost >= 0){
        let totalCost = foodCost + rentCost + clothCost;
        removeError('invalid-worning');
        return totalCost;
    }
    else{
        getError('invalid-worning');
    }
}
function getBalance (){
    let incomeValue = getInputValue('income-input');
    if(incomeValue > 0){
        let totalBalance = incomeValue - getTotalCost();
        if(totalBalance < 0){
            getError('balance-error');
            return 0;
        }
        else{
            return totalBalance;
        }
    }
    else{
        getError('invalid-worning');
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
        removeError('balance-error');
        balanceFild.innerText = getBalance();
    }
    else{
        getError('balance-error');
    }
})

// SAVE MONEY--------------------------------------
document.getElementById('save-button').addEventListener('click',function(){
    let saveIncomeValue = getInputValue('save_income');
    let incomeValue = getInputValue('income-input');
    if(saveIncomeValue == '' || saveIncomeValue <= 0 ){
        getError('save-worning');
    }
    else{
        let savingAmount = (incomeValue * saveIncomeValue) / 100;
        let balance = getBalance();
        if(saveIncomeValue >0){
            if(savingAmount > balance){
                getError('save-worning');
            }
            else{
                // SAVING AMOUNT
                let totalSaved = document.getElementById('saved');
                removeError('save-worning');
                removeError('save-error');
                totalSaved.innerText = savingAmount;
                //REMAINING BALANCE--------------------------------
                let remainingBalance = document.getElementById('remaining-balance');
                remainingBalance.innerText = balance - totalSaved.innerText
            }    
        }
        else{
            getError('save-error');
        }
    }
})