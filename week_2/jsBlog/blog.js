function BlogPost(title, author, date, content){
    this.title = titleStr + title;
    this.author = author;
    this.date = date;
    this.content = content;
}

blogPosts = [];

blogPosts.push(new BlogPost("Story One", "author one", new Date("October 13, 2000"), "this is a book one"));
blogPosts.push(new BlogPost("Story Two", "author two", new Date("October 14, 2001"), "this is a book two"));
blogPosts.push(new BlogPost("Story Three", "author three", new Date("October 15, 2002"), "this is a book three"));
blogPosts.push(new BlogPost("Story Four", "author four", new Date("October 16, 2003"), "this is a book four"));
blogPosts.push(new BlogPost("Story Five", "author five", new Date("October 17, 2004"), "this is a book five"));

console.log(blogPosts);


$( document ).ready(function() {
    for (let i  = 0; i < blogPosts.length ; i++){
        $('.allBlog').append(`
            <article>
                <h2>${blogPosts[i].title}</h2>
                <p>Author : ${blogPosts[i].author}</p>
                <p>Date : ${blogPosts[i].date}</p>
                <p>${blogPosts[i].content}</p>
            </article>
        `);
    }

    $('#submit').click(function(){
        blogPosts.push(new BlogPost($('#titleInput').val(), $('#authorInput').val(), 
                Date(), $('#contentInput').val()));
        console.log("In loop")
        $('.allBlog').append(`
            <article>
                <h2>${blogPosts[blogPosts.length-1].title}</h2>
                <p>Author : ${blogPosts[blogPosts.length-1].author}</p>
                <p>Date : ${blogPosts[blogPosts.length-1].date}</p>
                <p>${blogPosts[blogPosts.length-1].content}</p>
            </article>
        `);
    });
});


 