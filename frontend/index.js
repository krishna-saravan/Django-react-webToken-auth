const express = require ('express');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const registerRoute = require('./routes/auth/register');
const verifyRoute = require('./routes/auth/verify');
const loginRoute = require('./routes/auth/login');
const logoutRoute = require('./routes/auth/logout');
const meRoute = require('./routes/auth/me');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(registerRoute);
app.use(loginRoute);
app.use(logoutRoute);
app.use(meRoute);
app.use(verifyRoute);

app.use(express.static('client/build'));
app.get('*', (req, res) => {

    const myPath = path.resolve(__dirname, 'client', 'build', 'index.html') //the npm module path can make this command into absolute path to build into a string


    res.sendfile(myPath);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));