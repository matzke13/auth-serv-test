import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import testRoute from './routes/test.js';

dotenv.config();

const dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/test', testRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
