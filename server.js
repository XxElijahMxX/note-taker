const express = require('express');
const path = require('path');
const noteRoutes = require('./routes/noteRoutes')
const api = require('./routes/notes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', noteRoutes)

app.listen(PORT, () => {
    console.log(`API is now connected on port http://localhost:${PORT}`);
});