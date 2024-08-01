import express from 'express';
const app = express();
import bodyParser from "body-parser";

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

let posts = [];

app.get('/', (req, res) => {
    res.render('index', {posts: posts});
});

app.get('/new', (req, res) =>{
    res.render('new-post');
});

app.post('/new', (req, res) => {
    const {title, content} = req.body;
    posts.push({title, content});
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.render('edit-post', {post: posts[id], id});
});

app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const {title, content} = req.body;
    posts[id] = {title, content};
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    posts.splice(id, 1);
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is runnin on port ${port}`);
});