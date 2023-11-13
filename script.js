let users = [];
  
let phoneNumbers = users
    .filter(user => parseFloat(user.balance.replace(/[^\d.]/g, '')) > 2000)
    .map(user => user.phone);
  
  console.log("Телефонні номери користувачів з балансом більше 2000 доларів:", phoneNumbers);
  
  let totalBalance = users.reduce((sum, user) => sum + parseFloat(user.balance.replace(/[^\d.]/g, '')), 0);
  
  console.log("Загальний баланс всіх користувачів:", totalBalance.toFixed(2));