import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express();
// app.use(cors());

app.get('/profile', (req, res) => {
  console.log('This is profile', new Date());
  res.send('This is profile ' + new Date());
});

app.get('/weather/:cityName', (req, res) => {
  const userInputCityName = req.params.cityName.toLowerCase();
  console.log('userInputCityName:', userInputCityName);

  const weatherData = {
    karachi: {
      city: 'Karachi',
      country: 'Pakistan',
      temperature: 25,
      humidity: 50,
    },
    lahore: {
      city: 'Lahore',
      country: 'Pakistan',
      temperature: 30,
      humidity: 60,
    },
  };

  const weatherDataToSend = weatherData[userInputCityName];

  if (weatherDataToSend) {
    res.send(weatherDataToSend);
  } else {
    res.status(404).send(`Weather data not found for city: ${req.params.cityName}`);
  }
});

// ❌ Typo fix: `used` → ✅ `use`
app.use('/static', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
