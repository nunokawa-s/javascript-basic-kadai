const holidays = ["元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

for (let a = 0; a < 2; a++) {
for (let i = 0; i < holidays.length; i++) {
 console.log(holidays[i]);
}
}
let i = 0;  
let b = 0; 
while (b< 2) {  
  console.log(holidays[i]);  
  i++; 
  if (i >= holidays.length) {  
    b++;  
    i = 0; 
  }
}
