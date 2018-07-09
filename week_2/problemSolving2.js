// let names = ["li",  "long", "ling", "john", "William", "king", "peter", "candy", "sindy"];

// function randomNames(names){
//     return `${names[Math.floor(Math.random()*names.length)]} is the lucky one`
// }

// console.log(randomNames(names));

let numes1 = [3,4,9,1,10],
    numes2 = [9,1,2,10,3];

function randomNums(numes1,numes2){
    let newNumes1 = sortNum(numes1);
    let newNumes2 = sortNum(numes2);
    let temp =[]
    let k = 0, i = 0, j = 0;

    while (i < newNumes1.length && j < newNumes2.length){
        if (newNumes1[i] < newNumes2[j]){
            temp[k] = newNumes1[i];
            i++;
        } else {
            temp[k] = newNumes2[j];
            j++;
        }
        k++;
    }

    while (i < newNumes1.length){
        temp[k] = newNumes1[i];
        i++;
        k++;
    }

    while (j < newNumes2.length){
        temp[k] = newNumes2[j];
        j++;
        k++;
    }
    return temp;
}

function sortNum(arr){
    const temp = [...arr];
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = i+1 ; j < arr.length ; j++){
            if (temp[i] > temp[j]){
                let min = temp[j];
                temp[j] = temp[i];
                temp[i] = min;
            }
        }
    }
    return temp;
}

console.log(randomNums(numes1,numes2));
