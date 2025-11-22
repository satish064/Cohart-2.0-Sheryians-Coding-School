// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let inputWithdrawl = null
let balance = 10000

for(let i = 1;i<4;i++){

    if(i === 1) {
       balance-= 1000 
    } 

    inputWithdrawl = prompt('Enter a amount')

    if(i>1 &&  parseInt(inputWithdrawl) <= 10000) {
     balance -= parseInt(inputWithdrawl)
     console.log('deduct')
    }
        
    else console.log('Insufficient balance')
}

console.log('Current balance:- ',balance)


