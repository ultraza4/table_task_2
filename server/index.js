const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router.js');

//middleware
app.use(cors());
app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        app.listen(4000, () => { console.log("server has started on port 4000") });
    } catch (error) {
        console.log(error);
    }
}

startApp();

