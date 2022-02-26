require('dotenv').config();
const app = require('./app');

// Run Server.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
