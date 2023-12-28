const express = require('express');
const archiveComment = require('../utils/comments_log');

const pagesServingRouter = express.Router();

pagesServingRouter.get('', (req, res) => { res.render('index'); });

pagesServingRouter.get('/forecast(.html)?', (req, res) => { res.render('forecast'); });

pagesServingRouter.get('/university(.html)?', (req, res) => { res.render('university'); });

pagesServingRouter.get('/about(.html)?', (req, res) => { res.render('about'); });

pagesServingRouter.get('/help(.html)?', (req, res) => { res.render('help'); });

pagesServingRouter.get('/login(.html)?', (req, res) => { res.render('login'); });

pagesServingRouter.get('/register(.html)?', (req, res) => { res.render('register'); });

pagesServingRouter.post('/comment', (req, res)=>{
    console.log(req.body);
    const {email, comment} = req.body;
    archiveComment(email, comment)
    return res.status(200).send({msg: "Data received"})
})

pagesServingRouter.get('*', (req, res) => { //console.log(req.url);
    let msg = req.url.length > 15 ? "you typed and" : req.url;  
    res.render('404', { pageMsg: `${msg}` });
});


module.exports = pagesServingRouter