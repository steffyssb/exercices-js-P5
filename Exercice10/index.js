// Votre code ici
function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += i + " ";
    }
    return result.trim(); // To remove the trailing space
  }
  
export default printNumbers;
