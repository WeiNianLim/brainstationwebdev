const request = require("request");
const cheerio = require("cheerio");

const url = "https://old.reddit.com/";
//let i = 0;

function print(url, page, maxpages){
    //i++;
    if (page <= maxpages){
        request(url, (error, response, body) => {
            const $ = cheerio.load(body);
            console.log(`\n\nPage ${page}\n\n`)
            $('p.title').each((i, elem)=>{
                console.log($(elem).text());
            })
            print($('span.next-button > a').attr('href'), ++page, maxpages);
        })
    }
}

print(url, 1, 3);
