let str = 'love';

function encrypt(str){
    let temp = ''
    for (let i = 0 ; i < str.length;i++){
        temp+=String.fromCharCode(str.charCodeAt(i)+3);
    }
    return temp;
    // let arr = str.split('')
    // arr.forEach(element => {
    //     element = String.fromCharCode(charCodeAt(element)+3);
    // });
    // return arr.join('');
}

console.log(encrypt(str));