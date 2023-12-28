const path = require('path');
const express = require('express');
const hbs = require('hbs');
const weatherRouter = require('./routers/weather')
const pagesServingRouter = require('./routers/serving')

const PORT = process.env.PORT || 3000;

const app = express();

const publicRessourcesPath = path.join(__dirname, '..', 'public');
const pathToViews = path.join(__dirname, '..', 'templates', 'views');
const pathToPartials = path.join(__dirname, '..', 'templates', 'partials');

app.set('views', pathToViews);
app.set('view engine', 'hbs');

hbs.registerPartials(pathToPartials);

app.use(express.static(publicRessourcesPath));
app.use(express.urlencoded( {extended: true }))
app.use(express.json())
app.use(weatherRouter)
app.use(pagesServingRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});