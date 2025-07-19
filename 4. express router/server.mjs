import express from 'express';
//import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.json()); // body parser
// app.use(cors())


app.post('/login', (req, res, next) => {
    console.log('this is a login', new Date());
    res.send('this is profile' + new Date());
})

app.post('/signup', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('this is signup' + new Date());
})

app.use((req, res, next) => {
    if (token === 'valid') {
        next();

    } else {
        res.send({ message: 'invalid token' })
    }

})

//  GET    /api/v1/post/:userId/:PostId
app.get('/api/v1/post/:userId/:PostId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})
//  GET    /api/v1/posts/:userId/:PostId
app.get('/api/v1/posts/:userId/:PostId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})
//  POST    /api/v1/post
app.post('/api/v1/post', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  PUT    /api/v1/post/:userId/:PostId
app.put('//api/v1/post/:userId/:PostId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  DELETE    /api/v1/post/:userId/:PostId
app.delete('//api/v1/post/:userId/:PostId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  GET    /api/v1/comment/:PostId/:commentId
app.get('/api/v1/comment/:PostId/:commentId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  GET    /api/v1/comment/:PostId/:commentId
app.get('/api/v1/comments/:PostId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  PUT    /api/v1/comment/:PostId/:commentId
app.put('/api/v1/comment/:PostId/:commentId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  DELETE    /api/v1/comment/:PostId/:commentId
app.delete('/api/v1/comment/:PostId/:commentId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})

//  GET    /feed/:usedId
app.delete('/api/v1/comment/:PostId/:commentId', (req, res, next) => {
    console.log('this is a signup', new Date());
    res.send('post created');
})


























app.post('/weather', (req, res, next) => {

    console.log('req.body', req.body)
    // res.send('weather is normal') // not recommended 

    res.send({
        meaasge: 'weather is normal',
        temp: 32,
        min: 20,
    })
})



app.get('/getHtmlFile', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'shazaib.jpg'));

})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})


// google cloud - Google Compute engine;
// AWS - ES2 instance

// micro service architecture
// google app engine - cyclic - railway app - heroku - aws elastic beanstalk

// very cheap - per call charge - short lived
// nano service architecture
// google cloud functions - aws me isko lambda functions - netlify functions