import app from './app';

const port = 3000;
require('dotenv').config();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
