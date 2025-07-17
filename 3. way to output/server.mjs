import express from 'express';
//import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.json()); // body parser
// app.use(cors())


app.get('/profile', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('this is profile' + new Date());
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