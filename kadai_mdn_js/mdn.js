const today = new Date()

var year = today.getFullYear();

var month = today.getMonth();

var date = today.getDate() + 1;

console.log(`${year}年${month}月${date}日`);