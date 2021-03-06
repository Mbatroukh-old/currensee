'use strict';

const mongoose = require('mongoose');
const server = require('./api/server');
const { PORT, DB_URI } = require('./api/utils/constants');

server.listen(PORT, async () => {
    await mongoose.connect(DB_URI)
    console.log(`App listening on port ${PORT}`)
    console.log(`Database Connected at ${DB_URI}`)
});
