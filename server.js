const express = require('express');
const app = express();
const path = require('path');
app.use(require('body-parser').urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/Web-Info', {
extensions: ['html', 'htm']
}));

app.get("/", (req, res) => {
res.sendFile("index.html", {"root": __dirname + '/Web-Info'});
});

app.use('/Resources', express.static(__dirname + "/Resources"));

/* Render Error Page */

const router = express.Router();

router.use(function(req, res, next) {
    if (!req.route)
        return next (new Error('404'));  
    next();
});

router.use(function(err, req, res, next){
   // res.send(err.message);
    res.sendFile("errorPage.html", { root: path.join(__dirname, '/Web-Info') });
})

router.use(function(req, res){
    res.send(app.locals.test + '');
});

 app.use(router);

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});