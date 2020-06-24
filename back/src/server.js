  
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is litening on port: ${PORT}`);
  }
});