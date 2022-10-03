const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 4040;

db.authenticate()
  .then(() => {
    console.log('the connection with database is correct');
  })
  .catch((err) => console.log('Something wrong happened'.err));

//FUNCTION USING TO SYNCRONIZE NEW MODEL AND RELATIONSHIP
// db.sync({ force: true }).then(() => {
//   console.log('the database is sync');
//});
app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
