const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

const students = [
  {
    name: 'Brynhildr Sadler',
    program: 'Web Dev',
    grade: 75
  },
  {
    name: 'Joan Leon',
    program: 'UX',
    grade: 72
  },
  {
    name: 'Mark Summers',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Tanja Zawisza',
    program: 'Web Dev',
    grade: 92
  },
  {
    name: 'Slavomir Amato',
    program: 'UX',
    grade: 78
  },
  {
    name: 'Tihana Anand',
    program: 'UX',
    grade: 60
  },
  {
    name: 'Reima Ivov',
    program: 'Web Dev',
    grade: 95
  },
  {
    name: 'Demokritos Shafir',
    program: 'UX',
    grade: 83
  }
]

app.set('view engine', 'ejs')

function user(first, last){
    return {
        firstName : first,
        lastName : last
    }
}

app.get('/:name', (req, res) => {
    const profile = {
        userName : user("William", "Lim"),
        email : "weinianlim26@gmail.com",
        students : ["abc", "def" , "ghi"],
        userInput : req.params.name
    }
    res.render('index', profile)
    //res.send('hello world!')
})

app.get('/students/:program', (req, res) => {
    const profile = {
        students,
        programSelected : req.params.program
    }
    res.render('students', profile)
})

// app.get('/students/:program', (req,res) => {
//   const {program} = req.params
//   res.render('students', { 
//     students : students.filter((student) => {
//       return student.program.toLowerCase() === program.toLowerCase()
//     })
//    })
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
