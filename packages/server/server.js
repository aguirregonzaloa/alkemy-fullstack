const app = require('./app');

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
