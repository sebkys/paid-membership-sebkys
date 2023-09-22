document.getElementById('calculate').addEventListener('click', function () {
    var amount = document.getElementById('main-input').value;
    amount = amount.replaceAll(' ', '');
    amount = amount.replaceAll(',', '.');
    
    var operator = document.getElementById('operator').value;
    var price = 25;
    var paid = 0;
    var change = 0;
    var min = 0;
    var success = false;
    try {
      if (amount < 0) {
        throw new Error('Amount cannot be negative');
      } else if (amount === '') {
        throw new Error('Amount cannot be empty');
      } else if (isNaN(amount)) {
        throw new Error('Amount must be a number');
      } else if (amount < 25) {
        throw new Error('Amount not enough to pay 1 month membership');
      } 
      else {
        switch (operator) { 
          case '1month':
              success = true;
              paid = price;
              change = amount%paid;
              break;
          case '3month':
              paid = 3*price;
              if(amount>paid){
                success = true;
                change = amount%paid;
              }else{
                min = (amount-paid)*-1;
              }
              break;
          case '6month':
              paid = 6*price;
              if(amount>paid){
                success = true;
                change = amount%paid;
              }else{
                min = (amount-paid)*-1;
              }
              break;

          case '12month':
              paid = 12*price;
              if(amount>paid){
                success = true;
                change = amount%paid;
              }else{
                min = (amount-paid)*-1;
              }
              break;
        }
        if(success == true){
          document.getElementById('output').innerHTML = 'Your change : $'+change;
        }else{
          console.log(min);
          document.getElementById('output').innerHTML = 'Amount not enough, amount needed to pay : $'+min;
        }
      }     
  
    } catch (error) {
      output.innerHTML = error;
    } finally {
      alert(`Checking transaction...`);
    }
      }
      
  )
  