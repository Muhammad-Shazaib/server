import express from 'express';
import cors from 'cors';
import path from 'path'
const __dirname =path.resolve()

const app = express()
app.use(cors());


app.get('/profile', (req, res) => {
  console.log('this is profile', new Date())
  res.send('this is profile' + new Date())
})

app.get('/weather/:city', (req, res) => {
  // console.log('This is profile', new Date())
  // dummy data below

  let weatherData = {
    city: 'Karachi',
    country: 'Pakistan',
    temperature: 25,
    humidity: 50,
  }, 
  weatherData2 = {
    city: 'Lahore',
    country: 'Pakistan',
    temperature: 30,
    humidity: 60,
  }
  res.send()
})

let userInputCityName = req.params.cityName.toLowerCase()
console.log('userInputCityName', userInputCityName)

let weatherDataToSend = weatherData[userInputCityName] 

if (weatherDataToSend) {
  res.send(weatherDataToSend) 
} else {
  res.status(404).send(`Weather data not found for city: ${req.params.cityName}`)
}


app.used('/static', express.static(path.join(__dirname,  'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})



