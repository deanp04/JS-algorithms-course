/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// CHAINING BUILT IN METHODS

function reverseString(text) {
    return [...text].reverse().join('')
}

module.exports = reverseString

// // FOR-LOOP

function reverseString(text) {
    let result = '';
    for(let char of text){
        result = char + result
    }
    return result
}

module.exports = reverseString

// RECURSION
function reverseString(text) {
    if(text === '') {
        return ''
    }else {
        return reverseString(text.substr(1)) + text[0]
    }
}

module.exports = reverseString

// .reduce() (FASTEST)

function reverseString(text) {
    return text.split("").reduce((acc, c) => c + acc, '')
}

module.exports = reverseString
