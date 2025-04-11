const express= require('express');
const app= express();

let books= [ 
    {id:1, title:'Book 1',author:'Author 1'},
    {id:2, title:'Book 2',author:'Author 2'}
];

app.get('/',(req,res)=>{
    res.json(books);
})

app.use(express.json())

app.post('/books',(req,res)=>{
    const newBook=req.body;
    newBook.id = books.length+1;
    books.push(newBook);
    res.status(201).json(newBook)
})

app.put('/books/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const updateBook=req.body;
    const index= books.findIndex(book => book.id===id)

    if(index!=-1){
        books[index]={...books[index],...updateBook}
        res.json(books[index])
    }else{
        res.status(400).json({error: 'book not found'})
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})