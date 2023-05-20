// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// -> False

// addToZero([1]);
// -> False

// addToZero([1, 2, 3]);
// -> False

// addToZero([1, 2, 3, -2]);
// -> True

const addToZero = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true;
            }
        }
    }
    return false;
} 
console.log(addToZero([1, 2, 3, -2]));

// The runtime complexity is O(n^2). As the length of the input array increases, the runtime of the code will grow quadratically because the code uses nested loops and the number of comparisons increase as the input size grows.

// The space complexity is O(1) or constant space complexity. The space used by the function remains constant regardless of the size of the input array.
// _______________________________________________________________________________


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// -> True

// hasUniqueChars("Moonday");
// -> False

function hasUniqueChars(word) {
    let unique = [];

    for (let i = 0; i < word.length; i++) {
        if(!unique.includes(word.charAt(i))) {
            unique.push(word.charAt(i));
        } else {
            return false;
        }
    }
    return true;
}

console.log(hasUniqueChars(`Monday`));

// The runtime complexity is O(n), where n is the length of the input word. Since the loop iterates through each character in the word exactly once, the runtime of the loop is directly proportional to the length of the word. 

// The space complexity is O(k), where k represents the number of unique characters in the word. O(k) represents a complexity that depends on the value of a specific variable 'k' rather than the input size 'n'.
// _______________________________________________________________________________


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

// isPangram("I like cats, but not mice");
// -> False

const isPangram = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const stringLowerCase = string.toLowerCase();
    
    for (let i = 0; i < alphabet.length; i++) {
        if(!stringLowerCase.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// The time complexity is O(1). The loop runs exactly 26 times (alphabet length), regardless of the length of the input string.

// The space complexity is O(1). Constant amount of additional space is used regardless of the input size. The variables alphabet and stringLowerCase have fixed sizes and do not depend on the input length. Space used by the function does not increase with the input size.
// _______________________________________________________________________________


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// -> 5

const findLongestWord = (array) => {
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        length = Math.max(length, array[i].length);
    }
    return length;
}
console.log(findLongestWord(["hi", "hello"]));

// The time complexity is O(n), where n is the length of the input array. The loop runs a number of times equal to the length of the array. Since each element in the array is accessed and compared once, the time complexity of the loop is directly proportional to the size of the input array. 

// The space complexity is O(1). Variable length is not proportional to the input size and does not require additional space based on the array length. Length is reused for each iteration and doesn't grow with the size of the array.
// _______________________________________________________________________________