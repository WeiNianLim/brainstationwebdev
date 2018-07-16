const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(8080)

app.get('/blog', (req, res) => {
    res.render('blog', {blog : blogs})
})

app.get('/blog/:blogid', (req, res) => {
    blogs.forEach((element) => {
        if (element.id === req.params.blogid){
            res.render('oneblog', element)
            return;
        }
    })
})

app.post('/blog/',(req, res) => {
    const { id, title, summary, content, author, created } = req.body;
    addBlog(BlogPost(id, title, summary, content, author, created))
    res.render('blog', {blog : blogs})
})

app.delete('/blog/:blogid', (req,res) => {
    res.send('delete')
})

let blogs = [
{
id: 'blog-title-1',
title: 'Blog Title 1',
summary: 'This is a blog summary.',
content: 'This is the blog content',
author: 'John Smith',
created: 'February 5, 2018'
},
{
id: 'blog-title-2',
title: 'Blog Title 2',
summary: 'This is a blog summary.',
content: 'This is the blog content',
author: 'John Smith',
created: 'February 6, 2018'
}
]

function BlogPost(id, title, summary, content, author, created){
    this.id = id
    this.title = title
    this.summary = summary
    this.content = content
    this.author = author
    this.creted = created
}

function addBlog(blog){
    blogs.push(blog)
}