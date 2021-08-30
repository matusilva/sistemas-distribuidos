const mongoose = require('mongoose');
const uri = 'mongodb://localhost/productnode';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;