//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
//order('Lobster','Wild Rice','Wine')

// --- WRITE YOUR CODE BELOW ---
// Order Function Here:

function order(main, side , drink){
   
    if (main === null || side === null || drink === null)
        console.log("Please order again!");
    else 
        cook(main, side, drink);
}

// Cook Function Here:
function cook(main, side, drink){

    let main_index = 0, side_index = 0, drink_index = 0, time = 0;
    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === main){
            main_index = i;
            break;
        }
    }

    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === side){
            side_index = i;
            break;
        }
    }

    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === drink){
            drink_index = i;
            break;
        }
    }

    time = generateMenu()[main_index].time + generateMenu()[side_index].time + generateMenu()[drink_index].time;

    console.log(`Waiting time : ${time}`)

    setTimeout(function(){ serve(main, side, drink)}, time*1000);
}

// Serve Function Here:

function serve(main, side, drink){
    console.log("Meal is ready to serve");
    let price = 0;
    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === main){
            price += generateMenu()[i].price;
            break;
        }
    }

    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === side){
            price += generateMenu()[i].price;
            break;
        }
    }

    for (let i = 0; i < generateMenu().length ; i++){
        if (generateMenu()[i].name === drink){
            price += generateMenu()[i].price;
            break;
        }
    }
    console.log(`Total cost : ${price}`);
}

function checkMenu(item){
    for (let i = 0 ; i < generateMenu().length ; i++){
        if (item === generateMenu()[i].name)
            return true;
    }
}

function getItem(kind){

    let item;

    if (kind === "main")
        item = readlineSync.question("What main dish would you like?");
    else if (kind === "side")
        item = readlineSync.question("What side dish would you like?");
    else 
        item = readlineSync.question("What drink  would you like?");

    if (checkMenu(item))
        return item;
    
    console.log("Please try again");
    getMain();
}

let main, side , drink;

const readlineSync = require('readline-sync');

console.log("Welcome to Restaurant");

main = getItem("main");
side = getItem("side");
drink = getItem("drink");

order(main,side,drink);


// --- HELPER CODE ---

// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
