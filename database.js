const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_CONNECTION_URL, {useNewURLParser: true})
.then(()=> console.log(`Database connected successfully`))
.catch((err)=> console.log(err));
mongoose.Promise = global.Promise;