// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },100000);
// console.log("c");

const fs = require('fs');
const request = require('request');
const readline = require('readline-sync')
console.log("start");
// const data = fs.readFileSync("text.txt", "utf8");
// console.log(data)
fs.readFile("text.txt", "utf8", function(err, data){
    console.log(data);
});
console.log("end");

fs.writeFile("text2.txt", "This is File 2", (err) => {
    if(err) throw err;
    console.log("File has been saved"); 
})

fs.readFile("text2.txt", "utf8", function(err,data){
    console.log(data);
    fs.writeFile("text2.txt", data.concat(" more content"), (err)=>{
        console.log("completed");
    })
});



// const fileName = readline.question("File name : ");

// fs.copyFile("text.txt", fileName, (err) => {
//     if (err) throw err;
//     console.log("text.txt has been copied to text-copy.txt.")
// })

// fs.readFile(fileName, "utf8", function(err,data){
//     console.log(`${fileName} : ${data} `);
// });

request('https://brainstation.io', (err, response, body) => {
    if (err) throw err
    fs.writeFile("brainstation.html", body, (err) =>{
        if (err) throw err
        console.log("brainstation.html has been completed");
    })
})