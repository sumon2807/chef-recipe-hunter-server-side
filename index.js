const express=require('express');
const app= express();
const cors=require('cors');
const port= process.env.PORT || 5000;

const categories=require('./data/categories.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Recipe Hunter is running...')
});

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/categories/:id', (req, res)=>{
    const id=parseInt(req.params.id);
    console.log(id)
    const categoryData=categories.filter(data=> parseInt(data.id)===id);
    res.send(categoryData)
})

app.listen(port, ()=>{
    console.log(`Recipe API is Running on port: ${port}`)
})