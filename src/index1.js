// let arr = [0, 1, 0, 3, 12]

// const result = arr.filter(val => val!==0).concat(arr.filter(val => val===0))

// console.log(result)


let str = "aabbccd";  // split into array then calculate the count 
// of each character and 
// if the 1st character is non repeating then add it to the result string

let res = "";

str.split("").forEach((char) => { // split is used to convert string into array and forEach is used to iterate through each character of the array
    if(str.indexOf(char) === str.lastIndexOf(char)){ // indexOf is used to find the first occurrence of the character and lastIndexOf is used to find the last occurrence of the character
        res += char;
    }
})

console.log(res)