// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 

var ProGrad_1 = "Vaishnavi";
var ProGrad_2 = "Veda";
console.log(`The driver's name is ${Prograd_1}.`);
console.log(`The navigator's name is ${ProGrad_2}.`);

var len1 = 0;
var len2 = 0;
while (ProGrad_1[len1] != undefined) {
    len1++;
}
while (ProGrad_2[len2] != undefined) {
    len2++;
}
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters.`);
} else if (len2 > len1) {
    console.log(`It seems that the navigator has the longest name, it has ${len2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${len2} characters!.`);
}

var vowel_count = 0;
var vowels = [];
var indices = []
for (var i = 0; i < ProGrad_1.length; i++) {
    if (ProGrad_1[i] == 'a' || ProGrad_1[i] == 'e' || ProGrad_1[i] == 'i' || ProGrad_1[i] == 'o' || ProGrad_1[i] == 'u' || 
    ProGrad_1[i] == 'A' || ProGrad_1[i] == 'E' || ProGrad_1[i] == 'I' || ProGrad_1[i] == 'O' || ProGrad_1[i] == 'U') {
        vowels.push(ProGrad_1[i]);
        indices.push(i);
        vowel_count++;
    }
}
if (vowel_count == 0) {
    console.log("no vowels");
} else {
    console.log(`${ProGrad_1} `);
    for (var i = 0; i < vowels.length; i++) {
        console.log(`${vowels[i]} `);
    }
    for(var i = 0; i < indices.length; i++) {
        console.log(`${indices[i]} `);
    }
}

var lowercase_count = 0;
var uppercase_count = 0;
for(var i = 0; i < ProGrad_1.length; i++) {
    if(ProGrad_1[i] >= 'a' && ProGrad_1 <= 'z')
    lowercase_count++;
    else
    uppercase_count++;
}
console.log(`Uppercase characters count ${uppercase_count}.`);
console.log(`Lowercase characters count ${lowercase_count}.`);

var res = "";
for(var i = 0; i < ProGrad_1.length; i++) {
    if (ProGrad_1[i] >= 'a' && ProGrad_1[i] <= 'z') {
        res += String.fromCharCode(ProGrad_1.charCodeAt(i) - 32) + " ";
    } else {
        res += ProGrad_1[i];
    }
}
console.log(res);

res = "";
for (var i = ProGrad_1.length - 1; i >= 0; i--) {
    res += (ProGrad_1[i]);
}
console.log(res);

res = ProGrad_1 + " " + ProGrad_2;
console.log(res);

res = ProGrad_2 + " " + ProGrad_1;
console.log(res);

var comp = ProGrad_1 < ProGrad_2 ? -1 : (ProGrad_1 > ProGrad_2 ? 1 : 0);;
if (comp == -1) {
    console.log("The driver's name goes first.");
} else if (comp == 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}