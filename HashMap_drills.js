const HashMap = require("./hashMap");

//=== 1. Create a HashMap class ===//
function main() {
  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr._hashTable);
  // * Print your hash map and notice the length and items that are hashed in your hash map.
  // Have you hashed all the items you were asked to?
  // Some items are missing, likely due to exact keys overwriting the values- due to the hashmap only accepting ONE KEY for each value.

  console.log("Maiar key:", lotr.get("Maiar"));
  console.log("Hobbit key:", lotr.get("Hobbit"));
  // What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
  // Found the second inputted value rather than the first due to exact keys overwriting the values
  // The values I have is 'Frodo', and 'Sauron', there is not two seperate values for the keys due to the hashmap only accepting ONE KEY for each value.

  console.log(lotr._capacity);
  // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
  // The capacity is at 24 because we went over the initial capacity of 8 and the hashmap resized by multipling that initial capacity by the size_ratio of 3.

  return lotr;
}
main();

//=== 2. WhatDoesThisDo ===//

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  // setting new variables for 2 separate strings
  let map1 = new HashMap();
  // creating new hashmap
  map1.set(str1, 10);
  map1.set(str2, 20);
  // key and value for each string
  let map2 = new HashMap();
  //creating new hashmap
  let str3 = str1;
  let str4 = str2;
  //create new variables that will represent the same strings
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1)); // 20
  console.log(map2.get(str3)); // 10
  // return this._hashTable[index].value;
};
WhatDoesThisDo();
// What is the output of the following code? explain your answer.

// Output is going to be 20,10.

// Both hashmaps have the same string 'hello world' which will be notice as 1 item in the hashmap per hashmap
// It prints differently each time. Because the key's are the same, the last value set will overwrite the first value.
// So hashmap 1 would print 20 and hashmap 2 will print 10.
/* Since the key's are identical, we expect the values to be overwritten
 * Such that...
 * console.log(map1.get(str1)) should return 20 and
 * console.log(map2.get(str2)) should return 10
 */

//=== 3. Demonstrate understanding of Hash maps ===//
// *You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

/*  1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 
    using open addressing and a hash function k mod m, where k is the key and m is the length.
     
    keys = [10, 22, 31, 4, 15, 28, 17, 88, 59]
    m = new HashMap() where m.length = 11
    hashFn = k % m

    10 % 11 = 10 [ 22,88 , , ,4 ,15 ,28 ,17 ,9,10,59 ]
    22 % 11 = 0  
    31 % 11 = 9
    4  % 11 = 4
    15 % 11 = 4
    28 % 11 = 6
    17 & 11 = 6
    88 % 11 = 0
    59 % 11 = 4

    // This our final hash map after Open addressing corrections. ** means it was relocated due to collision.
    // 22	88*		58	4	15**	28	17**  59**	31	10	
    // 0	1	2	3	4	5	6	7   8	  9	    10	11



    2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions 
    resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

    keys = [5, 28, 19, 15, 20, 33, 12, 17, 10]
    m.length = 9
    5  % 9 = 5  [][28->19->10][20][12][][9][15->33][][17]
    28 % 9 = 1
    19 % 9 = 1
    15 % 9 = 6
    20 % 9 = 2
    33 % 9 = 6
    12 % 9 = 3
    17 % 9 = 8
    10 % 9 = 1 

    // 10						
    // 19					33	
    // 28					15	           17	
    // Head	 20	 12		5	Head	
    // 0	 1	 2	 3	4	5	6	7      8	9	

*/

//=== 4. Remove duplicates ===//

// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character.
// For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well
// such as "google all that you think can think of".

function removeDuplicates(string) {
  let hash = new HashMap();
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    try {
      hash.get(string[i]);
      // will return value or error
      // if already exists, then skip, otherwise
      // if error then we will set
    } catch (e) {
      hash.set(string[i], string[i]);
      // set key and value
      newStr += string[i];
    }
  }
  return newStr;
}
console.log(removeDuplicates("google all that you think can think of"));

//=== 5. Any permutation a palindrome ===//

// Write an algorithm to check whether any anagram of some string is a palindrome.
// Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr"
// can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north",
// the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // This regular expression replaces all starting and trailing non alphanumeric characters from the string.

  let hash = new HashMap();

  for (let i = 0; i < string.length; i++) {
    hash.set(string[i], i);
    // set key and values for hashMap
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (hash.get(string[i]) !== i) {
      // iterate through hashMap, if key does not equal value
      count--;
      // decrement count
    } else {
      count++;
      // else increment count
    }
  }
  if (count > 1) {
    return false;
    // if more keys DO equal values (more than 1), then not a palindrome
  }
  return true;
  // else an anagram could be a palindrome if more keys do not equal value
}
console.log(isPalindrome("acecarr"));
// console.log(isPalindrome('north'));
// console.log(isPalindrome('tdad'));
// console.log(isPalindrome('daeed'));

//=== 6. Anagram grouping ===//

// Write an algorithm to group a list of words into anagrams.
// For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

let input = ["east", "cars", "acre", "arcs", "teas", "eats", "race"];

function anagram(array) {
  const sortWords = (input) => input.split("").sort().join("");

  let newHash = new Map();

  array.forEach((word) => {
    const groupWords = sortWords(word);
    const group = newHash.get(groupWords) || [];
    newHash.set(groupWords, [...group, word]);
  });
  return Array.from(newHash.values());
  // if hash.length === 0 you have an anagram, push that to matching array
}

console.log(anagram(input));
