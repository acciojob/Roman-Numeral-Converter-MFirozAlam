function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result='';
	 for (let i = 0; i <= 6; i++) {
    let symbol = obj[i][0];
    let value = obj[i][1];

    // Handle 9 cases (like 900, 90, 9)
    if (i % 2 === 0 && i + 2 <= 6) {
      let nextValue = obj[i + 2][1];
      if (num >= value - nextValue) {
        while (num >= value - nextValue) {
          result += obj[i + 2][0] + symbol;
          num -= (value - nextValue);
        }
      }
    }

    // Handle 4 cases (like 400, 40, 4)
    if (i % 2 === 0 && i + 1 <= 6) {
      let halfValue = obj[i + 1][1];
      if (num >= value - halfValue) {
        while (num >= value - halfValue) {
          result += symbol + obj[i + 1][0];
          num -= (value - halfValue);
        }
      }
    }

    // Normal cases
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
