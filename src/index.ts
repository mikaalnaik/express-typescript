import express from 'express';
import GreetingsRoute from './routes/greetings';
const app = express();

const PORT = 3000;

app.use(GreetingsRoute);

app.listen(PORT, () => {
  console.log(`Server 🚀 running on ${PORT}.`);
});

