const mongoose = require('mongoose');
const uri = 'mongodb://localhost/noderest';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
