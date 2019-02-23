module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let sameBrackets = [];

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {

      if (str[i] === bracketsConfig[j][0]) { 

        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {

          if (sameBrackets.length === 0) {
            stack.push(str[i]);
            sameBrackets.push(str[i]);
          } else if (str[i] === sameBrackets[sameBrackets.length - 1]) {
            stack.pop();
            sameBrackets.pop();
          } else {
            stack.push(str[i]);
            sameBrackets.push(str[i]);
          }
        } else {
          stack.push(str[i]);
        }

        break;
      } else if (str[i] === bracketsConfig[j][1]) {
        
        if (stack.length !== 0 && stack[stack.length - 1] === bracketsConfig[j][0]) {
          stack.pop();
          break;
        } else {
          return false;
        }
      } 
    }
  }

  return stack.length === 0;
}