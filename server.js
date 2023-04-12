const express = require ('express');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 1000;

//setting templte engine
app.set('view engine', 'ejs');

//Accessing public folder path 
const publicPath = path.join(__dirname, ('public'));
app.use(express.static(publicPath));




app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, (req ,res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})