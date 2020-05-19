"Words that Start with a Vowel"

Write a function that retrieves all words that begin with a vowel.

function retrieve(str) {
  let vowels = "aeiou".split("");
  let arr = str.toLowerCase().split("").filter((el) => {return el !== "."});
  let newArr = arr.join("").split(" ");
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (newArr[i][0] === vowels[j]) {
        result.push(newArr[i]);
      }
    }
  }
return result;
}

console.log(retrieve("A simple life is a happy life for me."));
console.log(retrieve("Exercising is a healthy way to burn off energy."));