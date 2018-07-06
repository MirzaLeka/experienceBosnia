const express = require('express');
const app = express();

app.use(express.static(__dirname + '/web-info', {
extensions: ['html', 'htm']
}));

app.get("/", (req, res) => {
res.sendFile("index.html", {"root": __dirname + '/web-info'});
});


app.use('/resources', express.static(__dirname + "/resources"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});