import express, { json } from 'express';
import { user } from './route/useRoute';
import { auth } from './route/authRoute';
import { JwtMiddleware } from './middelware/jwtMiddleware';
import { errorMiddleware } from './middelware/errorHandler';
import { video } from './route/videoRoute';
const app = express();
app.use(json());

const PORT = process.env.PORT ?? 3000;

app.use('/', auth);
app.use('/api/user', JwtMiddleware, user);
app.use('/api/video', JwtMiddleware, video);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
