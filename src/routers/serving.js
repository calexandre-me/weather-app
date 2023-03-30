const express = require('express');

const pagesServingRouter = express.Router();

pagesServingRouter.get('', (req, res) => { res.render('index'); });

pagesServingRouter.get('/forecast(.html)?', (req, res) => { res.render('forecast'); });

pagesServingRouter.get('/location(.html)?', (req, res) => { res.render('location'); });

pagesServingRouter.get('/about(.html)?', (req, res) => { res.render('about'); });

pagesServingRouter.get('/help(.html)?', (req, res) => { res.render('help'); });

pagesServingRouter.get('/login(.html)?', (req, res) => { res.render('login'); });

pagesServingRouter.get('/register(.html)?', (req, res) => { res.render('register'); });

pagesServingRouter.get('*', (req, res) => { //console.log(req.url);
    let msg = req.url.length > 15 ? "you typed and" : req.url;  
    res.render('404', { pageMsg: `${msg}` });
});

pagesServingRouter.post('/comment', (req, res)=>{
    console.log(req.body);
    return res.send({msg: 'Hey'})
})

module.exports = pagesServingRouter