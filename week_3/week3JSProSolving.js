// const arr = ["racecar", "dr.awkward","yo banana boy", "borrow or rob"];

// function reversPrint(arr){
//     arr.forEach(element => {
//         let temp = "";
//         for (let i = element.length-1 ; i >= 0 ; i--)
//             temp+= element.charAt(i);
//         console.log(temp);
//     });
// }

// function isPalindrome(str){
//     return str === [...str].reverse().join("");
// }

// function isPalindrome(str){
//     for (let i = 0 ; i < str.length/2 ; i++){
//         let j = str.length - i -1;
//         if(str[i] !== str[j]) return false;
//     }
// }

// console.log(isPalindrome(arr[0]));

// reversPrint(arr);

// function reverseString(arr){
//     arr.forEach(element => {
//         let strArr = element.split("");
//         let reverseArr = strArr.reverse();
//         let str = reverseArr.join("");
//         console.log(str);
//     })
// }


// reverseString(arr);

//------------------------------------regex1-----------------------------------//
// let str = "this is javascript";

// // function isMatch(str){
// //     if(str.match(/(javascript)/gmi))
// //         return true;
// //     return false;
// // }

// function isMatch(str){
//     return (/(javascript)/gmi).test(str);       
// }
// console.log(isMatch(str));

//----------------------------------secondVowel------------------------------------//
// let str = "The quick brown fox jumped";

// function checkVowel(character){
//     if (character === 'a')
//         return true;
//     if (character === 'e')
//         return true;
//     if (character === 'i')
//         return true;
//     if (character === 'o')
//         return true;
//     if (character === 'u')
//         return true;
    
//     return false;
// }

// function randomVowel(){
//     const vowel = ["a","e","i","o","u"];
//     return vowel[Math.floor(Math.random()*vowel.length)];
// }

// function replaceSecondVowel(str){
//     let strArr = [...str];
//     let tracker = 0;
//     for (let i = 0 ; i < strArr.length ; i++){
//         if(checkVowel(strArr[i]))
//             tracker++;
//         if(tracker == 2){
//             strArr[i] = randomVowel();
//             tracker = 0; 
//         }
            
//     }
//     return strArr.join("");
// }

// console.log(replaceSecondVowel(str))

//----------------------------------billCalculator------------------------------------//

// function billCalculator(bill){
//     return bill+(bill*0.13)+(bill+(bill*0.13))*0.15;
// }

// console.log(billCalculator(100));

//----------------------------------currentTime------------------------------------//

functio