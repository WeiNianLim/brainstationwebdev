/**
 * retunr 
 */
// function printNum(){
//     for (var i = 1; i <= 100 ; i++){
//         console.log(i);
//     }
// }

// function returnCube(num){
//     //console.log(Math.sq(num));
//     return (num*num*num);
// }

// returnCube(4);

// function oddOrEven(num){

//     if (isNaN(num)){
//         return "not a number";
//     }

//     if(num % 2 === 0)
//         return "Even";
//     else 
//         return "Odd";
// }

// console.log(oddOrEven(101));

// function sqrRoot(num){

//     if (isNaN(num)) return "not a num";
//     return Math.sqrt(num);
// }

// console.log(sqrRoot(0.34));

// function reArray(){

//     var arr = [];

//     for (var i  = 0; i < 20 ; i++){
//         arr[i] = Math.floor((Math.random()*9)+1);
//     }

//     return arr;

// }

// console.log(reArray());

// function mostRec(arr){

//     var max = 0;
//     var index = 0;

//     for (var i = 0; i < arr.length ; i++){
//         for (var j = i ; j < arr.length ; j++){
//             if (arr[i] === arr[j]){

//             }
//         }
//     }
// }
/**
 * Lab 4 - Part 1
 */
var students = ["Tim", "Drew", "Chantal", "Graham", "Victor", "Sydney", "Yashar", "William"];

// console.log(students[0]);
// console.log(students[Math.floor(students.length/2)]);
// console.log(students[students.length-1]);
// console.log(students.pop());
// console.log(students);
// console.log(students.push("newstudent"));
// console.log(students);
// var students2 = students.concat("newstudent2")
// console.log(students2);
// console.log(students);
// //--------------Part 2----------------------//
// console.log(findStudent(students, "Tim"));
// console.log(findStudent(students, "Monica"));

// /**
//  * Lab 4 - Part 2
//  */

//  function createRandomNumArr(size){

//     var arr = [];

//     for (var i = 0 ; i < size ; i++){
//         arr[i] = Math.floor(Math.random()*9+1);
//     }

//     return arr;
//  }

//  function findEvenNum(arr){
//     for (var i = 0 ; i < arr.length ; i++){
//     if (arr[i] % 2 == 0)
//         console.log(arr[i]);
//     }
//  }

//  function findLargestNum(arr){
//     var max = 0;
//     for (var i = 0 ; i < arr.length ; i++){
//         if (arr[i] > max)
//             max = arr[i];
//     }
//     return max;
//  }

//  function findStudent(arr, name){
        //arr.indexOf(name  );
//     for (var i = 0 ; i < arr.length ;i++){
//         if (arr[i] === name)
//             return "Student : " + arr[i] + " at position " + i +" found.";
//     }
//     return name + " not found."
//  }

// var arr = createRandomNumArr(10);
// console.log(arr);
// findEvenNum(arr);
// console.log("Largest : " + findLargestNum(arr))
// console.log(arr.sort());
// console.log(arr[arr.length-1]);

/**
 * Lab 4 - Part 3
 */

 var arr2d =[
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ]

function rowAverage(arr){
    var temp = [];
    for (var i = 0 ; i < arr.length ; i++){
        var sum = arr[i][0];
        for (var j = 1 ; j < arr[0].length ; j++){
            sum+=arr[i][j];
        }
        temp.push(sum/arr[i].length);
    }
    
    return temp;
}
//var str = rowAverage(arr2d);
console.log(rowAverage(arr2d));

var studentGroups = [
                        [students[0], students[1]],
                        [students[2], students[3]],
                        [students[4], students[5]],
                        [students[6], students[7]]
                    ];

var studentNameAndGrades = [
                                ["Jim", 75], ["Sally", 83], ["Linda", 90], ["Scott", 60]
                            ];

function returnHigher(course, minGrade){
    for(let i = 0 ; i < course.length ; i++){
        if (course[i][1] >= minGrade){
            console.log(course[i][0] + " : "+course[i][1]);
        }
    }
}

returnHigher(studentNameAndGrades, 80);

// console.log(studentGroups[1][1]);
// console.log(studentGroups[2][0]);

let fruits = [["Apples", 0.75, 5]];

