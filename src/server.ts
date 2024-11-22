import express, { json } from 'express';
import { user } from './route/useRoute';
const app = express();
app.use(json());

const PORT = 3000;
app.get('/');

app.use('/api/user', user);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
