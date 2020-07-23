const express = require('express');
const app = express();
app.use(express.json());
const courses=[
    {id: 1 , name: 'course1'},
    {id: 2 , name: 'course2'},
    {id: 3 , name: 'course3'},
];
app.get('/',(req,res)=>{
    res.send('pooja sri');
});
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
app.post('/api/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
app.put('/api/courses/:id',(req,res)=>{
    const course= courses.find(c => c.id === parseInt(req.params.id));
    
    course.name =req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id',(req,res)=>{
    const course= courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('not available')
    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});
app.get('/api/courses/:id',(req,res)=>{
    const course= courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('not available')
});
const port = process.env.PORT||3032;
app.listen(port,()=>console.log(`listen on port ${port}...`));