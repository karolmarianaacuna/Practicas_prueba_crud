const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  
};

