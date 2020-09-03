const express = require('express');
const apiRoutes = require('./routes/apiRoute')
const htmlRoutes = require('./routes/htmlRoute')
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, function() {
    console.log(`App is listening on PORT: ${PORT}`);
});

