const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const brackets = new Stack();

function isBracket(char) {
  if(char === '(') return ['left', 'round'];
  if(char === ')') return ['right', 'round'];
  if(char === '[') return ['left', 'square'];
  if(char === ']') return ['right', 'square'];
  if(char === '{') return ['left', 'curly'];
  if(char === '}') return ['right', 'curly'];
  return ['n/a', 'n/a'];
}



function validateBrackets(string) {

  const arr = string.split('');

  for(let i = 0; i < arr.length; i++) {
    let char = arr[i];
    let bracket = isBracket(char);

    if(bracket[0] === 'left') {
      brackets.push(char);
    }


    if(bracket[0] === 'right') {

      if(!brackets.top) {
        return false;
      }

      if(isBracket(brackets.peek())[1] === bracket[1]) {
        brackets.pop();
      } else {
        return false;
      }
    }

  }
  if(!brackets.top) {
    return true;
  }
  return false;
}



module.exports = {
  validateBrackets
};