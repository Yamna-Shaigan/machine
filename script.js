let balance = 1000;

document.getElementById('balance-btn').addEventListener('click', checkBalance);
document.getElementById('withdraw-btn').addEventListener('click', withdraw);
document.getElementById('deposit-btn').addEventListener('click', deposit);
document.getElementById('exit-btn').addEventListener('click', exit);

function checkBalance() {
  document.getElementById('message').innerHTML = `Your balance is: $${balance}`;
}

function withdraw() {
  let amount = parseInt(document.getElementById('amount').value);
  if (amount > balance) {
    document.getElementById('message').innerHTML = 'Insufficient balance!';
  } else if (isNaN(amount) || amount <= 0) {
    document.getElementById('message').innerHTML = 'Invalid amount!';
  } else {
    balance -= amount;
    document.getElementById('message').innerHTML = `Withdrawal successful! New balance: $${balance}`;
  }
}

function deposit() {
  let amount = parseInt(document.getElementById('amount').value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById('message').innerHTML = 'Invalid amount!';
  } else {
    balance += amount;
    document.getElementById('message').innerHTML = `Deposit successful! New balance: $${balance}`;
  }
}

function exit() {
  document.getElementById('message').innerHTML = 'Thank you for using ATM!';
  document.getElementById('amount').value = '';
}

